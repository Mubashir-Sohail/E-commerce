import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cors from "cors";
import { connectDB } from "./db/connection.js";

 // Connect to MongoDB

dotenv.config();

const app= express();
//json format:
app.use(express.json());
app.use(cors());
connectDB();                                  
//  call  api :
app.use('/api/v1/user',userRouter);



// port detail:
const Port=process.env.PORT || 5004;

app.listen(Port,()=>console.log('server is running on',Port));







//                    create api in index.js
// app.get('/api/v1/user',async(req,res)=>{

// //  try{
// //     const [result] = await connection.query('SELECT * FROM `login`');
// //     res.send(result);

// //  }catch (error){
// //    console.log(error);
// //  }
// // }
// );

//      create api 

// app.post('/api/v1/users/create',(req,res)=>{
//      res.send(req.body);
// })