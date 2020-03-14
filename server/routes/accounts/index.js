var express = require('express')
var router = express.Router()

const exampleCtrl = require('./controllers/exampleCtrl')

router.route('/example').get(exampleCtrl)

module.exports = router
