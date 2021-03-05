const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) return res.status(401).json({ msg: 'Invalid authentication' })
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.status(401).json({ msg: "Invalid authentication" })

            req.user = user.user || user.newUser

            next()
        })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}