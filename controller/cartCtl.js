const User = require("../model/userModel")
const checkItem = (id, cart) => {
    for (const i of cart) {
        if (i.product._id === id) return false
    }
    return true
}
const cartCtrl = {
    getCart: async (req, res) => {
        try {
            const { cart } = await User.findById(req.user._id)

            res.json({ cart })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    addCart: async (req, res) => {
        try {
            const { product, quantity } = req.body

            const user = await User.findById(req.user._id)
            const { cart } = user
            if (!checkItem(req.body.product._id, cart)) return res.status(500).json({
                msg: "item is valid!!"
            })
            cart.push({ product, quantity })


            await User.findByIdAndUpdate(req.user._id, {
                cart: [...cart]
            })
            res.json({ msg: "add product success" })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }

    },
    changeQuality: async (req, res) => {
        try {

            if (!req.params.id) return res.status(500).json("id not valid!!")

            const user = await User.findById(req.user._id)
            let index = -1;
            user.cart.map((i, ind) => {

                if (i.product._id === req.params.id) return index = ind

            })
            const { cart } = user
            if (index === -1) return res.status(500).json({ msg: "cart item not found!!" })
            if (cart[index].quantity <= 1 && req.body.action === "decrease") {
                return res.status(500).json({ msg: "error !!" })
            }

            req.body.action === "increase" ? cart[index].quantity += 1 : cart[index].quantity -= 1;

            await User.findByIdAndUpdate(req.user._id, {
                cart: [...cart]
            })
            res.json({ msg: "suscess " })
        } catch (error) {

            res.status(500).json({ msg: error.message })
        }
    },
    deleteItem: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json("id not valid!!")

            const user = await User.findById(req.user._id)
            let index = -1;
            user.cart.map((i, ind) => {

                if (i.product._id === req.params.id) return index = ind

            })

            if (index === -1) return res.status(500).json({ msg: "cart item not found!!" })
            const { cart } = user
            cart.splice(index, 1)
            await User.findByIdAndUpdate(req.user._id, {
                cart: [...cart]
            })
            return res.json({ msg: "success delete" })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    removeCart: async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.user._id, {
                cart: []
            })
            res.json({ msg: "remove success" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}

module.exports = cartCtrl