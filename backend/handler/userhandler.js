import  {connectDB} from "../db/connection.js"
import { User } from "../db/query.js";
import { Product } from "../db/query.js";


//    ***************************> Signup  <*******************************
// create users in database 
export const signUp = async (req, res) => {
    try{ let users=new User(req.body);
     let result=await users.save();
     result =result.toObject(); //convert into object;
     delete result.password;
     let data= res.send(result);

     return data
    }catch(error){
     console.error("Error creating user:", error); // Log the actual error
 
     res.status(500).json({ error: "Failed to create user" });
 
    }
 };
//***********************> Login <*************************************** 
// checked in database user are login or not
export const logIn = async (req, res) => {
    try {
        if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password") // Get users
        if(user){
           res.send(user)
        }else{
            res.send({ result: 'Not user Found'})
        }
        }else{
           res.status(200).json(user);
        }
        
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

export const addproduct= async (req, res)=>{
    try{
        let product =new Product(req.body);
        let result= await product.save();
        res.send(result);

    }catch(error){
        res.status(500).json({ error: "Failed to fetch product" });

    }
}

export const getproduct= async(req,res)=>{
    try{
     let products=await Product.find();
     if(products.length>0){
        res.send(products)
     }else{
        res.send({result: "No Products Found"})
     }
    }catch(error){
        res.status(500).json({ error: "Failed to fetch product" });

    }
}

export const delproduct=async(req,res)=>{
  try{
  const result =await Product.deleteOne({_id:req.params.id})
  res.send(result) 
  }catch(error){
    res.status(500).json({ error: "Failed to delete product" });

  }
}

export const updateProduct=async(req,res)=>{
  try{
  const result=await Product.findOne({_id:req.params.id})
  res.send(result) 

  }catch(error){
    res.status(500).json({ error: "Failed to fetch/update product" });

  }
}

export const updateDetail=async(req,res)=>{
    try{
        let result=await Product.updateOne(
           {_id: req.params.id},
           {
             $set: req.body
           } 
        )
        res.send(result)
    }catch(error){
        res.status(500).json({ error: "Failed to update product" });

    }
}
export const searching=async(req,res)=>{
    try{
    let result =await Product.find({
        "$or":[
            {name:{$regex: req.params.key}},
            {category:{$regex: req.params.key}}
        ]
    })
    res.send(result)

    }catch(error){
        res.status(500).json({ error: "Failed Searching" });

    }
}




// export const updateUser = async (req, res) => {
//     const { id } = req.params;
//     const { name, age} = req.body;

//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             id,
//             { name, age },
//             { new: true } // Return updated document
//         );
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to update user" });
//     }
// };
// let { name,email,password} = req.body;

// try {
//     let newUser = new User({ name,email,password});
//     let results= await newUser.save();
//     res.status(201).json(results);
// } catch (error) {
//     res.status(500).json({ error: "Failed to create user" });
// }