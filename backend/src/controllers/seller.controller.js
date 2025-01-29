import uploadImage from "../lib/uploadImage.js";
import Product from "../models/product.model.js";

export const addProduct = async(req,res)=>{
      const { productName,description,price,category,quantity,images } = req.body
      try {
        const user = req.user
        if(user.role==='buyer'){
          return res.status(401).json({message:"You have to be a seller to add products"})
        }
        const seller_id = user._id;
        let imageUrls = [];
       if(images && Array.isArray(images) && images.length > 0){
        imageUrls = await Promise.all(images.map(async(image)=>{
            return await uploadImage(image)
         }))
        }
        const product = new Product({
            seller_id,
            productName,
            description,
            price,
            category,
            images: imageUrls,
            quantity
        });

        // Save the product to the database
        await product.save();

        res.status(201).json(product);

      } catch (error) {
        console.log("error in add product controller",error)
        res.status(500).json({ message: 'Error creating product', error: error.message });
      }
}
export const getAllSellerProducts = async(req,res)=>{
    try {
        const seller_id = req.user._id
    const sellerProducts = await Product.find({seller_id:seller_id})
    return res.status(200).json(sellerProducts)
    } catch (error) {
        console.log("error in get seller products controller",error)
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }

}