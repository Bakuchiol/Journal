const router = require('./users');
const profilesCtrl = require('../../controllers/api/profile');
const checkAuth = require('../../controllers/api/users');

router.get('/:id', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)


module.exports = router