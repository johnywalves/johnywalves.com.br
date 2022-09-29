const puppeteer = require('puppeteer')
const express = require("express")
const fs = require('fs')
const http = require("http")

async function getImage(servingUrl, page, slug) {
    await page.goto(`${servingUrl}__generated/${slug}/index.html`)

    const elementThumbnail = await page.$('#ogimage')
    await elementThumbnail.screenshot({
        path: `./public/ogimages/${slug}.jpg`
    })

    console.log(`get OpenGraph ${slug}`)
}

// Gerar os Open Graphics Images 
async function navigateOpenGraphic() {
    // Gerar pastas de origem
    if (!fs.existsSync('./public/ogimages')) {
        fs.mkdirSync('./public/ogimages')
    }

    // Pegar caminhos possíveis
    const slugs = []
    fs.readdir('./public/__generated', (_, files) => {
        files.forEach(file => slugs.push(file));
    });

    // Serve HTMLs
    const app = express()
    app.use(express.static("public"))
    const server = http.createServer(app)
    await server.listen(0)
    const servingUrl = `http://0.0.0.0:${server.address().port}/`

    // Crawling
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    for (const slug of slugs) {
        await getImage(servingUrl, page, slug)
    }

    // Closing
    await browser.close()
    await server.close((err) => {
        console.log('OpenGraph server closed')
        process.exit(err ? 1 : 0)
    })
}

navigateOpenGraphic()