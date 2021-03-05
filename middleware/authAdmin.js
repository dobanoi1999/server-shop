const User = require('../model/userModel')

module.exports = async (req, res, next) => {
    try {
        const user = await User.findOne({
            _id: req.user._id
        })

        if (user.role === 0) return res.status(400).json({ msg: "Admin resources access denied" })
        next()
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}