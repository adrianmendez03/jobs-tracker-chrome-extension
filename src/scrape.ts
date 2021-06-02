import express from 'express'
import puppeteer from 'puppeteer'

export const router = express.Router()

router.post('/', async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(req.body.url, { waitUntil: 'networkidle0' })

    await page.screenshot({ path: "screenshot.png" })

    await browser.close()


})

