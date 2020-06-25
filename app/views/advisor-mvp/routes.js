const express = require('express')
const router = express.Router()


router.use('/advisor-mvp', require('./views/advisor-mvp/_routes'));

module.exports = router