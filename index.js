const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/image", (req, res) => {
    res.sendFile(`${__dirname}/images/sticker.webp`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})