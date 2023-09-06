const express = require('express')
const router = express.Router()
const entryCtrl = require('../../controllers/api/entries')

router.get('/journal', entryCtrl.allEntries)
router.get('/entry/:id', entryCtrl.oneEntry)
// /create
router.post('/newEntry', entryCtrl.newEntry)
// edit/:id
router.put('/edit/:id', entryCtrl.editEntry)
// deleteone
router.delete('/delete/:id', entryCtrl.deleteEntry)

module.exports = router