const Orders = require('../model/orderModel')
const orderCtl = {
    fetchOrder: async (req, res) => {
        try {
            const orders = await Orders.find({ userId: req.user._id })
            res.json({ orders })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    createOrder: async (req, res) => {
        try {
            const { name, phone, card, address, total } = req.body

            const newOrder = new Orders({
                userId: req.user._id,
                card,
                name, phone, address, total
            })
            await newOrder.save()
            res.json({ msg: "order success" })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    cancelOrder: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not valid!" })
            await Orders.findByIdAndUpdate(req.params.id, {
                status: "cancelled"
            })
            res.json({ msg: "cancel successfully" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }

    },
    getOrder: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not valid!" })
            const order = await Orders.findById(req.params.id)

            if (req.user.role !== 1 && order.userId !== req.user._id)
                return res.status(401).json({ msg: "Invalid authentication" })
            res.json({ order })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}
module.exports = orderCtl