const mongoose = require('mongoose')
const validator = require('validator')
var bcrypt = require('bcrypt-nodejs')
const { Schema } = mongoose

const userSchema = new Schema({
  local: {
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    activated_email: {type: Boolean, default: false}
  },
  google: {
    id: {type: String, default: ''},
    displayname: {type: String, default: ''},
    name: {type: Object, default: null},
    emails: {type: Object, default: null},
    photos: {type: Object, default: null},
    gender: {type: Object, default: ''},
  },
  facebook: {
    id: {type: String, default: ''},
    displayname: {type: String, default: ''},
    name: {type: Object, default: null},
    emails: {type: Object, default: null},
    photos: {type: Object, default: null},
    gender: {type: Object, default: ''},
  },
  twitter: {
    id: {type: String, default: ''},
    displayname: {type: String, default: ''},
    name: {type: Object, default: null},
    emails: {type: Object, default: null},
    photos: {type: Object, default: null},
    gender: {type: Object, default: ''},
  },
  line: {
    id: {type: String, default: ''},
    displayname: {type: String, default: ''},
    name: {type: Object, default: null},
    emails: {type: Object, default: null},
    photos: {type: Object, default: null},
    gender: {type: Object, default: ''},
  },
  credits: { type: Number, default: 0},
})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

mongoose.model('users', userSchema)