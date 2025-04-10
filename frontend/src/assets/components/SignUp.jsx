import React ,{useEffect, useState}from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState(""); 
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
          navigate('/')
        }
    },[])


    const collectData=async()=>{
        console.log(name,email,password);
        let result= await fetch('http://localhost:5002/api/v1/user/signup',{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json",
            },
        });
        result=await result.json()
        console.log(result);
        if(result){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }
    }  
    return(
    <div className='signContainer'>
        
    <div className='signup '>
    <h1>Sign Up :</h1>
    <input placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} className='ichange'/>
    <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  className='ichange' />
    <input placeholder='Password ' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  className='ichange'/>
    <button onClick={collectData} className='btn'>Submit</button>
    </div>
    </div>
    )
}
export default SignUp