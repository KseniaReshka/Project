const express = require('express')
const City = require('../models/City')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await City.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.delete('/:cityId', async (req, res) => {
  try {
    const { cityId } = req.params
    const city = await City.findById(cityId)

    // if (city.name.toString() === req.user._id) {
      await city.remove()
      return res.send(null)
    // } else {
      // res.status(401).json({message: 'Unauthorized'})
    // }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})
router.patch( '/:city', async (req, res) => {
  console.log("req", req.body);
  // console.log("rres", res);
  try {
    const { cityId } = req.params
    // const newCity = await City.create({
    //   ...req.body
    // })
    const updatedCity = await City.create( req.body)
//       res.send(updatedUser)
    res.status(201).send(updatedCity)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

// router.put('/:cityId', async (req, res) => {
//   try {
//     const { userId } = req.params

//     if (userId === req.user._id) {
//       const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
//       res.send(updatedUser)
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