## Node API
> Full Stack Javascript (React + NodeJS)

## Setup
after clone cd NodeAPI
run `npm install`<br>
and<br>
cd folder client run `npm install`<br>
after install packages
create file dev.js in folder config<br>
```javascript
module.exports = {
  googleClientID: 'YOUR GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR GOOGLE_CLIENT_SECRET',
  mongoURL: 'YOUR MONGO_URI',
  cookieKey: 'YOUR COOKIE_KEY',
  stripePublishableKey: 'YOUR STRIPE_PUBLISHABLE_KEY',
  stripeSecretKey: 'YOUR STRIPE_SECRET_KEY',
  sendGridKey: 'YOUR SEND_GRID_KEY',
  redirectDomain: 'YOUR REDIRECT_DOMAIN'
}
```