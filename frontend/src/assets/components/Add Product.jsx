import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [error,setError]=useState(false)
    const navigate=useNavigate();

    
    const addproduct=async()=>{
        console.log(!name); 
        if(!name || !price || !category || !company){

            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5002/api/v1/user/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }

        })
        result=await result.json()
        navigate('/')
        alert("Add Product is SuucessFully")
    }


    return(
        <div className="" >
          
            <div style={{display:"flex" }} className="addproduct">
            <h1 style={{paddingTop:"25px"}}>Add Product :</h1>
            <div>
            <input placeholder="Name" className="ichange" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                {error && !name && <span className="input-validation"> Valid & Not Null Field</span>}

            </div>
            <div >
                <input placeholder="Price"  className="ichange" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                {error && !price && <span className="input-validation"> Valid & Not Null Field</span>}
            </div>
            <div>
            <input placeholder="Category"  className="ichange"value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                {error && !category && <span className="input-validation"> Valid & Not Null Field</span>}  

            </div>
            <div>
            <input placeholder="Company"  className="ichange"value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                {error && !company && <span className="input-validation"> Valid & Not Null Field</span>}

            </div>
            <button onClick={addproduct} className="btn" style={{paddingTop:"10px",paddingBottom:"10px" }}>Submit</button>
            </div>



            
        </div>
    )
}

export default AddProduct