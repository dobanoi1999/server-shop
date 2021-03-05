const historyCtl = require("../controller/historyCtl")
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin")

const router = require("express").Router()

router.route('/')
    .get(auth, authAdmin, historyCtl.getAll)

router.route('/:id')
    .get(auth, authAdmin, historyCtl.get)
    .post(auth, authAdmin, historyCtl.changeStatus)

module.exports = router