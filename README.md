<img src="https://travis-ci.org/yuttasakcom/NodeAPI.svg?branch=master">
## Node API
> Full Stack Javascript (React + NodeJS)

## Setup
current folder run `npm install`<br>
client folder run `npm install`<br>

## Generate config
create file dev.js in folder config<br>
```javascript
module.exports = {
  googleClientID: 'YOUR GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR GOOGLE_CLIENT_SECRET',
  facebookClientID: 'YOUR FACEBOOK_CLIENT_ID',
  facebookClientSecret: 'YOUR FACEBOOK_CLIENT_SECRET',
  twitterClientID: 'YOUR TWITTER_CLIENT_ID',
  twitterClientSecret: 'YOUR TWITTER_CLIENT_SECRET',
  lineClientID: 'YOUR LINE_CLIENT_ID',
  lineClientSecret: 'YOUR LINE_CLIENT_SECRET',
  mongoURL: 'YOUR MONGO_URI',
  cookieKey: 'YOUR COOKIE_KEY',
  stripePublishableKey: 'YOUR STRIPE_PUBLISHABLE_KEY',
  stripeSecretKey: 'YOUR STRIPE_SECRET_KEY',
  sendGridKey: 'YOUR SEND_GRID_KEY',
  redirectDomain: 'YOUR REDIRECT_DOMAIN'
}
```

## Run Project
`npm run dev`