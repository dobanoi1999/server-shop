const router = require("express").Router()

const cartCtrl = require("../controller/cartCtl")
const auth = require('../middleware/auth')

router.route('/')
    .get(auth, cartCtrl.getCart)
    .post(auth, cartCtrl.addCart)
    .put(auth, cartCtrl.removeCart)
router.route('/:id')
    .post(auth, cartCtrl.changeQuality)
    .put(auth, cartCtrl.deleteItem)
module.exports = router