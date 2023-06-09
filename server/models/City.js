const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

module.exports = model('City', schema)