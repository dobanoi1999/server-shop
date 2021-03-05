const Orders = require('../model/orderModel')

const historyCtl = {
    getAll: async (req, res) => {
        try {
            const orders = await Orders.find()
            if (!orders || orders.length === 0)
                return res.json({ orders: [] })
            return res.json({ orders })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }

    },
    get: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not defined" })
            const order = await Orders.findById(req.params.id)
            res.json({ order })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    changeStatus: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not defined" })
            const order = await Orders.findByIdAndUpdate(req.params.id, {
                status: req.body.status
            })
            res.json({ msg: "change success" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = historyCtl