const {Schema, model} = require('mongoose')

const schema = new Schema({
  image: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  events: [{ type: Schema.Types.String }],
  rate: Number,
}, {
  timestamps: true
})

// const schema = new Schema({
//   _id: {type: String},
//   image: String,
//   city: { type: Schema.Types.ObjectId, ref: 'City' },
//   event: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
//   rate: Number,
// }, {
//   timestamps: true
// })

module.exports = model('Holiday', schema)