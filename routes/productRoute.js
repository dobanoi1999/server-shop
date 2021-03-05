const router = require('express').Router()
const productCtl = require('../controller/productCtl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
router.route('/')
    .get(productCtl.getAllProducts)
    .post(auth, authAdmin, productCtl.createProduct)
    .delete(auth, authAdmin, productCtl.deleteAllProduct)
router.route('/:id')
    .get(productCtl.getProduct)
    .put(auth, authAdmin, productCtl.updateProduct)
    .delete(auth, authAdmin, productCtl.deleteProduct)

module.exports = router