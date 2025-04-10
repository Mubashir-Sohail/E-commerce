import mongoose from "mongoose";


//************************> Login/Signup <*************************/

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const User = mongoose.model("orders", userSchema);

//***********************> Add Product <******************************/
const productSchema =new mongoose.Schema({
    name:String,
    price:String,
    category: String,
    userId: String,
    company:String
})
export const Product= mongoose.model("products", productSchema);