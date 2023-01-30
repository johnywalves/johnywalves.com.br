const puppeteer = require("puppeteer")
const express = require("express")
const fs = require("fs")
const http = require("http")

async function getImage(servingUrl, page, slug) {
  await page.goto(`${servingUrl}/__generated/${slug}/index.html`, {
    waitUntil: "networkidle0",
  })

  const elementThumbnail = await page.$("#ogimage")
  await elementThumbnail.screenshot({
    path: `./public/ogimages/${slug}.jpg`,
    type: "jpeg",
    quality: 100,
  })
}

async function getResume(servingUrl, page, language) {
  await page.goto(`${servingUrl}/resume/${language}/index.html`, {
    waitUntil: "networkidle0",
  })

  await page.pdf({
    path: `./public/docs/johnywalves_${language}.pdf`,
    printBackground: true,
    format: "A4",
  })
}

// Gerar os Open Graphics Images
async function navigateOpenGraphic() {
  console.log("Pos-run Generator generating...")

  // Gerar pastas de origem
  !fs.existsSync("./public/ogimages") && fs.mkdirSync("./public/ogimages")

  // Pegar caminhos possíveis
  const slugs = []
  fs.readdir("./public/__generated", (_, files) => {
    files.forEach((file) => slugs.push(file))
  })

  // Serve HTMLs
  const app = express()
  app.use(express.static("public"))

  const server = http.createServer(app)
  await server.listen(0)
  const servingUrl = `http://0.0.0.0:${server.address().port}`

  // Crawling
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Getting - Images
  /*for (const slug of slugs) {
    await getImage(servingUrl, page, slug)
  }*/

  // Getting - Curriculum Vitae
  await getResume(servingUrl, page, "br")
  await getResume(servingUrl, page, "en")

  // Closing
  await browser.close()
  await server.close((err) => {
    console.log("Pos-run server closed")
    process.exit(err ? 1 : 0)
  })

  console.log("Pos-run Generator done")
}

navigateOpenGraphic()
