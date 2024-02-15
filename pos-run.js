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

async function getResumeAndCoverLetter(servingUrl, page, language) {
  // Resume
  await page.goto(`${servingUrl}/resume/${language}/index.html`, {
    waitUntil: "networkidle0",
  })

  await page.pdf({
    path: `./public/docs/johnywalves_${language}.pdf`,
    printBackground: false,
    format: "A4",
  })

  // Cover Letter
  await page.goto(`${servingUrl}/cover/${language}/index.html`, {
    waitUntil: "networkidle0",
  })

  await page.pdf({
    path: `./public/docs/johnywalves_${language}_cover.pdf`,
    printBackground: true,
    format: "A4",
  })
}

async function getThumbnail(url, page, filename) {
  await page.goto(url, { waitUntil: "networkidle0" })

  await page.setViewport({ width: 1200, height: 627, deviceScaleFactor: 1 })

  await page.screenshot({
    path: `./public/figures/${filename}.jpg`,
    type: "jpeg",
    quality: 100,
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
  server.listen(0)
  const servingUrl = `http://0.0.0.0:${server.address().port}`

  // Crawling
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()

  // Getting - OpenGraph Images
  for (const slug of slugs) {
    await getImage(servingUrl, page, slug)
  }

  // Getting - Curriculum Vitae and Cover Letter
  await getResumeAndCoverLetter(servingUrl, page, "br")
  await getResumeAndCoverLetter(servingUrl, page, "en")

  // Change to dark theme
  await page.goto(servingUrl, { waitUntil: "networkidle0" })
  const changeThemeIcon = await page.$("#change-theme-icon")
  await changeThemeIcon.click()

  // Getting - ListPages (Posts and Comics)
  await getThumbnail(`${servingUrl}/blog/index.html`, page, "thumbnail_posts")
  await getThumbnail(
    `${servingUrl}/comics/index.html`,
    page,
    "thumbnail_comics"
  )

  // Closing
  await browser.close()
  server.close((err) => {
    console.log("Pos-run server closed")
    process.exit(err ? 1 : 0)
  })

  console.log("Pos-run Generator done")
}

navigateOpenGraphic()
