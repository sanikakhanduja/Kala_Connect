import { generateJWT } from "../lib/generateToken.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import Seller from "../models/seller.model.js"

export const signup = async (req,res)=>{
    const { email,fullName,password,role,bio,location,phone,shopName,profilePicture } = req.body
    try{
        if(!email || !password || !fullName || !role){
            return res.status(400).json({message:"all fields are required"})
        }
        if(password.length<6){
           return res.status(400).json({message:"password should be atleast 6 characters long!"})
        }
    
        const user = await User.findOne({ email })
        if(user){
            return res.status(400).json({message:"user with this email already exists!"})
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const newUser = new User({
            email,
            fullName,
            password:hash,
            role
        })
       // ✅ If user is a seller, create a seller profile
       if (role === "seller") {
        const newSeller = new Seller({
            userId: newUser._id, // Link to the User model
            userName:newUser.fullName,
            shopName: shopName || "",  // Optional fields
            bio: bio || "",
            location: location || "",
            profilePicture: profilePicture || "",
            phone: phone
        });

        await newSeller.save();
    }
           generateJWT(newUser._id,res)
          await newUser.save()
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            role:newUser.role
         })
       
    }catch (error){
        console.log("error in the signup controller "+ error)
        res.status(500).json({message:"internal server error"})
    }
}

export const login = async (req,res)=>{
    const { email,password } = req.body
    try {
        if(!email || !password){
            return res.status(400).json({message:"all fields are required"})
        }
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({message:"invalid credentials!"})
        }
 
        const isPasswordCorrect = await bcrypt.compare(password,user.password)

        if(!isPasswordCorrect){
            return res.status(400).json({message:"invalid credentials!"})
        }
        generateJWT(user._id,res)
        res.status(200).json({
            _id: user._id,
            fullName:user.fullName,
            email: user.email,
            role:user.role
        })


    } catch (error) {
        console.log("error in the login controller "+ error)
        res.status(500).json({message:"internal server error"})
    }

}

export const logout = (req,res)=>{
   try {
    res.cookie("jwt","",{ maxAge:0 })
    res.status(200).json({message:"logged out successfully!"})
   } catch (error) {
    console.log("error in the logout controller "+ error)
    res.status(500).json({ message:"internal server error" })
   }
}

export const checkAuth = (req,res)=>{
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("error in the check auth upon refresh controller "+ error)
        res.status(500).json({message:"Internal server error"})
    }
}