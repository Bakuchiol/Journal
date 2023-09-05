const express = require('express')
const router = express.Router()
const entryCtrl = require('../../controllers/api/entries')

router.get('/entries', entryCtrl.allEntries)
router.get('/entry/:id', entryCtrl.oneEntry)
router.post('/new', entryCtrl.newEntry)
router.put('/edit/:id', entryCtrl.editEntry)
router.delete('/delete/:id', entryCtrl.deleteEntry)