import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        seller_id:{ type: mongoose.Schema.Types.ObjectId, ref:"Seller", required:true},
        productName:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        price:{
            type:String
        },
        category:{
            type:String
        },
        images: [{ type: String }],
        quantity:{
            type:String
        }
    },
    {timestamps:true}
);

const Product = mongoose.model("Product", productSchema)

export default Product;