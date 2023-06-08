const express = require('express')
const router = express.Router({ mergeParams: true })

// /api/auth
// router.use('/auth', require('./auth.routes'))
// router.use('/comment', require('./comment.routes'))
// router.use('/quality', require('./quality.routes'))
// router.use('/profession', require('./profession.routes'))
router.use('/city', require('./city.routes'))
router.use('/event', require('./event.routes'))
router.use('/holiday', require('./holiday.routes'))
// router.use('/user', require('./user.routes'))

module.exports = router