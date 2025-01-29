import Product from "../models/product.model.js"


export const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        if(products.length==0){
            res.status(200).json({message:"no products avaialble"})
        }
        res.status(200).json(products)
    } catch (error) {
        console.log("error in getAllProducts controller",error)
        res.status(500).json({message:"couldn't get all products"})
    }
       
}

export const getProductById = async(req,res)=>{
    const productId = req.params.id
    if(!productId){
        res.status(401).json({message:"Product Id not found"})
    }
    try {
        const product = await Product.findById(productId)
        res.status(200).json(product)
    } catch (error) {
        console.log("error in getProductById controller",error)
        res.status(500).json({message:"couldn't get the requested product"})
    }
}
