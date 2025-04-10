import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  

const Login=()=>{
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const navigate=useNavigate();
   
   useEffect(()=>{
      const auth =localStorage.getItem('user');
      if(auth){
       navigate('/')
      }
   },[])


   const handlelogin=async()=>{
   console.log("email,password",email,password)
   let result=await fetch('http://localhost:5002/api/v1/user/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
         'Content-Type':'application/json',
      }
   })
   result=await result.json();
   console.log(result)
   if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/')
   }else{
      alert("Please Enter Correct Details");
   }
   }
   return(
   <div className="signContainer">

    <div className="signup">
    <h1>Login </h1>
    <input placeholder="Enter Your Email"className='ichange' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input placeholder="Enter Your Password" type="password" className='ichange' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={handlelogin} className='btn'>Submit</button>
    </div>
   </div>
   )
}

export default Login