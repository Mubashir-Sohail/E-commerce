import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Product=()=>{
    const [products,setProducts]=useState([]);

    useEffect(()=>{
     getproducts(); 
    },[])

    const getproducts=async()=>{
        let result=await fetch('http://localhost:5002/api/v1/user/get-product');
        result =await result.json();
        setProducts(result);
    }
    console.log("product",products)
    const deleteProduct=async(id)=>{
     let result =await fetch(`http://localhost:5002/api/v1/user/product/${id}`,{
        method:"Delete"
     });
     result=await result.json();
     if(result){
        getproducts()
     }
    }
    
    const searchHandle=async(event)=>{
        let key =event.target.value;
        if(key){
        let result =await fetch(`http://localhost:5002/api/v1/user/search/${key}`)
        result=await result.json();
        if(result){
            setProducts(result)
        }
        }else{
            getproducts()
        }
    }


    return(
        <div className="product-list">
           <div className="" style={{display: "flex" ,justifyContent:"space-around"}}>
           <h1>Products</h1>
           <input src="" placeholder="Search Product"  className="ichange" style={{marginBottom:"25px"}} onChange={searchHandle}/>
           </div>
            <ul>
                <li>S.No #</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item,index)=>
                <ul>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li>
                <div style={{display:"flex", justifyContent: "space-around"}}>
                <button onClick={()=>deleteProduct(item._id)} style={{background: "red",color:"white"}}>Delete</button>
                <Link to={"/UpdateProduct/"+item._id}><button style={{background: "green",color:"white"}}>Update</button></Link>
                    </div>
                    </li>
                </ul>
                )
            }
        </div>
    )
}

export default Product