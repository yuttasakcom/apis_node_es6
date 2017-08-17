const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const TwitterStrategy  = require('passport-twitter').Strategy
const LineStrategy  = require('passport-line').Strategy

const mongoose = require('mongoose')

const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

// Local Strategy
passport.use('local-signup', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
},
async (req, email, password, done) => {
  try {
    const user = await User.findOne({'local.email': email})
    if (user && user.local.activated_email === true) {
      return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
    } else if (user && user.local.activated_email === false) {
      // Send email
      console.log('Send email again')

      return done(null, user)
    } else {
      let newUser = new User()
      newUser.local.email = email
      newUser.local.password = newUser.generateHash(password)
      newUser.save(function(err) {
        if (err)
          throw err

        // Send email
        console.log('Send email')

        return done(null, newUser)
      })
    }
  } catch(err) {
    return done(err)
  }
}))

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
async (req, email, password, done) => {
  try {
    const user = await User.findOne({ 'local.email':  email })

    if (!user)
      return done(null, false, req.flash('loginMessage', 'No user found.'))
    if (!user.validPassword(password))
      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'))

    return done(null, user)
  } catch(err) {
    return done(err)
  }
}))

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
async (accessToken, refreshToken, profile, done) => {

  const existingUser = await User.findOne({google: {id: profile.id}})

  if (existingUser) {
    return done(null, existingUser)
  }

  const user = await new User({google: {
    id: profile.id,
    displayname: profile.displayName,
    name: profile.name,
    emails: profile.emails,
    photos: profile.photos,
    gender: profile.gender,
  }}).save()
  done(null, user)
}))

// Facebook Strategy
passport.use(new FacebookStrategy({
  clientID : keys.facebookClientID,
  clientSecret : keys.facebookClientSecret,
  callbackURL: '/auth/facebook/callback',
},
async (accessToken, refreshToken, profile, done) => {

  const existingUser = await User.findOne({facebook: {id: profile.id}})
  
  if (existingUser) {
    return done(null, existingUser)
  }

  const user = await new User({facebook: {
    id: profile.id,
    displayname: profile.displayName,
    name: profile.name,
    emails: profile.emails,
    photos: profile.photos,
    gender: profile.gender,
  }}).save()
  done(null, user)
}))

// Twitter Strategy
passport.use(new TwitterStrategy({
  consumerKey : keys.twitterClientID,
  consumerSecret : keys.twitterClientSecret,
  callbackURL: '/auth/twitter/callback',
},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({twitter: {id: profile.id}})
  
  if (existingUser) {
    return done(null, existingUser)
  }

  console.log(profile)

  const user = await new User({twitter: {
    id: profile.id,
    displayname: profile.displayName,
    name: profile.name,
    emails: profile.emails,
    photos: profile.photos,
    gender: profile.gender,
  }}).save()
  done(null, user)
}))

// Twitter Strategy
passport.use(new LineStrategy({
  channelID : keys.lineClientID,
  channelSecret : keys.lineClientSecret,
  callbackURL: '/auth/line/callback',
},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({line: {id: profile.id}})
  
  if (existingUser) {
    return done(null, existingUser)
  }

  console.log(profile)

  const user = await new User({line: {
    id: profile.id,
    displayname: profile.displayName,
    name: profile.name,
    emails: profile.emails,
    photos: profile.photos,
    gender: profile.gender,
  }}).save()
  done(null, user)
}))