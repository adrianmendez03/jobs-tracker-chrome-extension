import puppeteer, { Browser } from "puppeteer"

export let browser: Browser

;async () => {
  browser = await puppeteer.launch()
}
