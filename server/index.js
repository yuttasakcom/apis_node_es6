const express = require('express')
const app = express()

app.use('/', (req, res) => {
  res.send({msg: 'OK'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})