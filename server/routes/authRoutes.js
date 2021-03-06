const passport = require('passport')
const Logined = require('../middleware/Logined')

module.exports = app => {
  app.get('/success', (req, res) => res.send('success'))
  app.get('/fail', (req, res) => {
    console.log('signupMessage', req.flash('signupMessage'))
    console.log('loginMessage', req.flash('loginMessage'))
    res.send('fail')
  })

  // Authenticate Local
  app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/success',
    failureRedirect : '/fail',
		failureFlash : true
  }))
  
  app.post('/login', Logined, passport.authenticate('local-login', {
    successRedirect : '/success',
    failureRedirect : '/fail',
    failureFlash : true
  }))

  // Authenticate Google
  app.get('/auth/google', Logined, passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/api/current_user')
    }
  )

  // Authenticate Facebook
  app.get('/auth/facebook', Logined, passport.authenticate('facebook', {
    scope: 'email'
  }))

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/api/current_user')
    }
  )

  // Authenticate Twitter
  app.get('/auth/twitter', Logined, passport.authenticate('twitter', {
    scope: 'email'
  }))

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/api/current_user')
    }
  )

  // Authenticate Line
  app.get('/auth/line', Logined, passport.authenticate('line'))

  app.get(
    '/auth/line/callback',
    passport.authenticate('line'),
    (req, res) => {
      res.redirect('/api/current_user')
    }
  )

  // Authenticate Apis
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}