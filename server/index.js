const express = require('express')
const app = express()

app.use('/api', (req, res) => {
  res.send({msg: 'OK'})
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
