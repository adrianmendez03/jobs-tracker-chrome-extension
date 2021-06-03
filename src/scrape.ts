import express from "express"
import puppeteer, { Browser } from "puppeteer"

export const router = express.Router()
let browser: Browser
;(async function () {
  browser = await puppeteer.launch()
})()

router.post("/", async (req, res) => {
  const page = await browser.newPage()

  await page.goto(req.body.url)

  const [companyName] = await page.$x(
    '//*[@id="viewJobSSRRoot"]/div[1]/div[3]/div[1]/div[2]/div/div/div[1]/div'
  )

  const [title] = await page.$x(
    '//*[@id="viewJobSSRRoot"]/div[1]/div[3]/div[1]/div[1]/h1'
  )
  const [location] = await page.$x(
    '//*[@id="viewJobSSRRoot"]/div[1]/div[3]/div[1]/div[2]/div/div/div[3]'
  )
  const [description] = await page.$x('//*[@id="jobDescriptionText"]')

  const data = {
    title: await page.evaluate((el) => el.textContent, title),
    companyName: await page.evaluate((el) => el.textContent, companyName),
    location: await page.evaluate((el) => el.textContent, location),
    description: await page.evaluate((el) => el.textContent, description),
  }

  await page.close()

  res.json({ ...data })
})
