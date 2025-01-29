import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Connect to users
    shopName: { type: String},
    bio: { type: String },
    location: { type: String},
    profilePicture: { type: String }, },
    {timestamps:true}
);

const Seller = mongoose.model("Seller",sellerSchema)

export default Seller;