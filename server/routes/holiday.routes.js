const express = require('express')
const Holiday = require('../models/Holiday')
// const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

// router.patch('/:holidayId', async (req, res) => {
//   try {
//     const { holidayId } = req.params

//     if (holidayId === req.holiday._id) {
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

router.get('/', async (req, res) => {
  try {
    const list = await Holiday.find()
    console.log("list",list);
    res.send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

module.exports = router