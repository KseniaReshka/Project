const express = require('express')
const Event = require('../models/Event')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Event.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})
// router.patch('/:eventId', async (req, res) => {
//   try {
//     const { eventId } = req.params
// console.log("req-eventId ",req);
//     if (eventId === req.event._id) {
//       const updatedHoliday = await Holiday.findByIdAndUpdate(holidayId, req.body, {new: true})
//       res.send(updatedHoliday)
//     } else {
//       res.status(401).json({message: 'Unauthorized'})
//     }
//   } catch (e) {
//     res.status(500).json({
//       message: 'На сервере произошла ошибка. Попробуйте позже'
//     })
//   }
// })

module.exports = router