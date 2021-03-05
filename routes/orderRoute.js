const orderCtl = require("../controller/orderCtl")
const auth = require("../middleware/auth")

const router = require("express").Router()

router.route('/')
    .get(auth, orderCtl.fetchOrder)
    .post(auth, orderCtl.createOrder)
router.route('/:id')
    .delete(auth, orderCtl.cancelOrder)
    .get(auth, orderCtl.getOrder)

module.exports = router