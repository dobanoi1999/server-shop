const User = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtl = {
    userRegister: async (req, res) => {
        try {
            const { username, password, email } = req.body
            const user = await User.findOne({ email })
            if (user) return res.status(400).json({ msg: "Email already exists" })

            if (password.length < 6) return res.status(400).json({ msg: "Password is at least 6 characters long." })
            const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new User({
                username, email,
                password: passwordHash
            })
            await newUser.save()
            const token = createToken({ newUser })
            res.json({ msg: "Register success", token, userId: newUser._id })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    userLogin: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            console.log(user)
            if (!user) return res.status(400).json({ msg: "Email/Password combination is not valid" })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Email/Password combination is not valid" })

            const token = createToken({ user })


            res.json({ msg: "Login Success", token, userId: user._id })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    userVerify: async (req, res) => {
        try {
            const token = req.header("Authorization")
            if (!token) return res.json(false)

            await jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if (err) return res.json(false)

            })
            res.json(true)
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    getInfor: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json({ user })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }

    }
}
const createToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1d" })
}
module.exports = userCtl