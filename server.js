const express = require('express')
const fs = require('node:fs')
const app = express()
const port = 3000

app.use(express.static("public"))



app.get('/', (req, res) => {
  res.sendFile('templates\\index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
