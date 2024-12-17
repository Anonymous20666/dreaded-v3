const mongoose = require('mongoose');


const settingsSchema = new mongoose.Schema({
  autoread: {
    type: Boolean,
    default: true 
  },
  autoviewstatus: {
    type: Boolean,
    default: true
  },
  autolikestatus: {
    type: Boolean,
    default: true
  },
  autobio: {
    type: Boolean,
    default: false
  },
  anticall: {
    type: Boolean,
    default: false
  },
  antionce: {
    type: Boolean,
    default: true
  },
dnd: {
    type: Boolean,
    default: false
  },
  presence: {
    type: String,
    default: 'online'
  },
  prefix: {
    type: String,
    default: '.'
  },
reactEmoji: {
    type: String,
    default: '❤️'
  },
  packname: {
    type: String,
    default: 'dreaded-v3 fortunatus'
  },
  dev: {
    type: String,
    default: '254114018035'
  },
  DevDreaded: {
    type: [String], 
    default: ['254114018035']
  },
  botname: {
    type: String,
    default: 'DREADED'
  },
  mode: {
    type: String,
    default: 'public'
  }
});


module.exports = mongoose.model('Settings', settingsSchema); 