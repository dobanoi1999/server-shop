const router = require('express').Router()

const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.ClOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_scret: process.env.CLOUD_API_SCRET
})

router.post('/', (req, res) => {
    try {

        const { name, price, description } = req.body

        res.json({ msg: "ok" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
module.exports = router