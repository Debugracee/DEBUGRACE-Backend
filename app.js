
const express = require('express')
const app = express()
const port = 30000

app.get('/', (req, res) => {
  res.send('Testando URL, by Isaque')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
