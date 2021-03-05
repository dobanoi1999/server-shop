const Products = require('../model/productModel')
const Categorys = require('../model/categoryModel')
const User = require('../model/userModel')
const cloud = require('cloudinary').v2
const fs = require('fs')

cloud.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


const productCtl = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Products.find()


            res.json({ products })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getProduct: async (req, res) => {
        try {
            if (req.params.id) return res.status(500).json({ msg: "id not exists" })

            const product = await Products.findById(req.params.id)

            if (!product) return res.json({ msg: "product not found" })

            res.json({ product })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }

    },
    updateProduct: async (req, res) => {

        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not exists" })

            const product = await Products.findById(req.params.id)
            if (req.files) {
                const { file } = req.files
                if (file?.size > 1024 * 1024) {
                    removeTemp(file.tempFilePath)
                    return res.status(500).json({ msg: "Size to large" })
                }
                if (file?.mimetype !== "image/png" && file?.mimetype !== "image/jpeg") {
                    removeTemp(file.tempFilePath)
                    return res.status(500).json({ msg: "File format incorrect " })
                }

                if (!product) res.status(500).json({ msg: "product not found" })
                cloud.uploader.upload(file.tempFilePath, { folder: "ecommerce" },
                    async (err, result) => {

                        if (err) return res.status(500).json({ msg: err.message })
                        removeTemp(file.tempFilePath)
                        await product.update({
                            ...req.body,
                            image: {
                                url: result.url,
                                publicId: result.public_id
                            }
                        })
                        res.json({
                            msg: "update success", newImage: {
                                url: result.url,
                                publicId: result.public_id
                            }
                        })
                        cloud.uploader.destroy(product.image.publicId)
                    })


            } else {
                await product.update({
                    ...req.body
                })
                return res.json({ msg: "Update success" })
            }

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            const { title, description, category, price } = req.body

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(500).json({ msg: "No file ware upload" })
            }

            const { file } = req.files
            if (file.size > 1024 * 1024) {
                removeTemp(file.tempFilePath)
                return res.status(500).json({ msg: "Size to large" })
            }
            if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
                removeTemp(file.tempFilePath)
                return res.status(500).json({ msg: "File format incorrect " })
            }


            cloud.uploader.upload(file.tempFilePath, { folder: "ecommerce" },
                async (err, result) => {

                    if (err) return res.status(500).json({ msg: err.message })
                    removeTemp(file.tempFilePath)


                    const newProduct = new Products({
                        title,
                        description,
                        price,
                        category,
                        image: {
                            url: result.url,
                            publicId: result.public_id
                        }
                    })
                    await newProduct.save()
                    return res.json({ msg: "Product created", product: newProduct })
                })


        } catch (error) {
            res.status(500).json({ msg: error.message })
        }



        //res.json(file)
    },
    deleteProduct: async (req, res) => {
        try {
            if (!req.params.id) return res.status(500).json({ msg: "id not exists" })

            const product = await Products.findById(req.params.id)
            if (product) {
                cloud.uploader.destroy(product.image.publicId,
                    async (err, result) => {
                        if (err) return res.status(500).json({ msg: err.message })
                        await product.remove()
                        return res.json({ msg: "delete success" })
                    })
            }

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    deleteAllProduct: async (req, res) => {
        try {
            await cloud.api.delete_resources_by_prefix("ecommerce/")
            await Products.remove({})
            res.json({ msg: "delete all success" })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }

}
const removeTemp = (file) => {
    fs.unlink(file, err => {
        if (err) throw err
    })
}

module.exports = productCtl