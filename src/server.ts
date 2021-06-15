/*
    REQUIRED EXTERNAL MODULES
*/

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { router as scrapeRouter } from "./scrape"

dotenv.config()

/*
    APP VARIABLES
*/

if (!process.env.PORT) process.exit(1)

const PORT = parseInt(process.env.PORT) || 3500
const app = express()

/*
    APP CONFIGURATION
*/

app.use(cors())
app.use(express.json())
app.use("/scrape", scrapeRouter)

// Default Route

app.get("/", (req, res) => {
  res.json({ msg: "Default route... Nothing to see here" })
})

/*
    SERVER ACTIVATION
*/

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
