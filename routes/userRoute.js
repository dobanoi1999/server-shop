const router = require('express').Router()
const userCtl = require('../controller/userCtl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/register')
      .post(userCtl.userRegister)

router.route('/login')
      .post(userCtl.userLogin)

router.get('/verify', userCtl.userVerify)
router.get('/:id', auth, authAdmin, userCtl.getInfor)
module.exports = router