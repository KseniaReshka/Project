const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  text: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('Event', schema)