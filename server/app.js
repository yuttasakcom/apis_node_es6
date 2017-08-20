const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const keys = require('./config/keys')
const routes = require('./routes')

require('./models/User')
require('./services/passport')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(keys.mongoURL, {useMongoClient: true})
}


const app = express()
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./routes/authRoutes')(app)
routes(app)

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app
