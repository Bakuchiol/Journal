const express = require('express')
const router = express.Router()
const boardCtrl = require('../../controllers/api/board')

router.post('/upload', boardCtrl.storage)
router.get('/files', boardCtrl.fileFilter)

module.exports = router