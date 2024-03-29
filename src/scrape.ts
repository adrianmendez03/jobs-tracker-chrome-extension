import express from "express"
import puppeteer from "puppeteer"

import { fetchScrapePaths } from "./utils"

export const router = express.Router()

router.post("/", async (req, res) => {
  const { url } = req.body
  const format = fetchScrapePaths(url)

  let jobInfo = {
    title: "",
    company: "",
    location: "",
    description: "",
  }

  if (format) {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      })

      const page = await browser.newPage()
      await page.goto(url)

      await page.setViewport({
        width: 768,
        height: 1024
      })

      const [company] = await page.$x(format.company)
      const [title] = await page.$x(format.title)
      const [location] = await page.$x(format.location)
      const [description] = await page.$x(format.description)

      console.log(company, title, location, description, format)

      jobInfo = {
        title: await page.evaluate((el) => el.textContent, title),
        company: await page.evaluate((el) => el.textContent, company),
        location: await page.evaluate((el) => el.textContent, location),
        description: await page.evaluate((el) => el.innerHTML, description),
      }

      await page.close()
    } catch (e) {
      console.log(e)
    }
  }

  res.json({ ...jobInfo })
})
