const router = require('express').Router()

const categoryCtl = require('../controller/categoryCtl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/')
    .get(categoryCtl.getAllCategorys)
    .post(auth, authAdmin, categoryCtl.createCategory)
router.route('/:id')
    .delete(auth, authAdmin, categoryCtl.deleteCategory)
    .put(auth, authAdmin, categoryCtl.updateCategory)
module.exports = router