import express from 'express'
import https from 'https'
import router from './routes/router'
import fs from 'fs'
import cors from 'cors'

const app = express()
app.use(cors())
router(app)

const env = process.env.NODE_ENV || 'prod'
const options = {
  key: fs.readFileSync(`${__dirname}/config/${env}/default.key`, 'utf8'),
  cert: fs.readFileSync(`${__dirname}/config/${env}/default.crt`, 'utf8')
}

const server = https.createServer(options, app)

const port = process.env.PORT || 8443

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})