import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Connect to user
    userName:{type:String},
    shopName: { type: String},
    bio: { type: String },
    location: { type: String},
    profilePicture: { type: String }, 
    phone:{type:String,minLength:10,maxLength:10}},
    {timestamps:true}
);

const Seller = mongoose.model("Seller",sellerSchema)

export default Seller;