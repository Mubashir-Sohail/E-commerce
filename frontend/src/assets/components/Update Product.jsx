import React , { useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom';


const UpdateProduct=()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const  param   =useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getItemDetails();
    },[])


    const getItemDetails=async()=>{
    console.log(param)
    let result =await fetch(`http://localhost:5002/api/v1/user/product/${param.id}`)
    result=await result.json(); //promise ay jaha ga or wo read strim ma hoo ga convert json ma
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    }

    const updateproduct=async()=>{
        console.log(name,price,category,company)
        let result =await fetch(`http://localhost:5002/api/v1/user/product/${param.id}`,{
            method:"put",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await result.json()
        navigate('/')
        alert("Update Product is Successfully ")
    }


    return(
        <div>
            
            <div style={{display:"flex" }} className="addproduct">
            <h1 style={{paddingTop:"25px"}}>Update Product :</h1>
            <div>
            <input placeholder="Name" className="ichange" value={name} onChange={(e)=>{setName(e.target.value)}}/>

            </div>
            <div >
                <input placeholder="Price"  className="ichange" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
            <div>
            <input placeholder="Category"  className="ichange"value={category} onChange={(e)=>{setCategory(e.target.value)}}/>

            </div>
            <div>
            <input placeholder="Company"  className="ichange"value={company} onChange={(e)=>{setCompany(e.target.value)}}/>

            </div>
            <button onClick={updateproduct} className="btn" style={{paddingTop:"10px",paddingBottom:"10px" }}>Submit</button>
            </div>



            
        </div>
    )
}

export default UpdateProduct