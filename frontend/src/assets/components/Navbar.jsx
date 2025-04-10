import React from 'react';
import Login from '../Login.jsx';
import Home from "./Product.jsx"
import AddProduct from "./Add Product.jsx"
import UpdateProduct from "./Update Product.jsx"
import LogOut from "./Logout.jsx"
import Profile from "./Profile.jsx"
import SignUp from './SignUp.jsx';
import { Link ,useNavigate} from "react-router-dom"


function Navbar(){
    const auth=localStorage.getItem('user');
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear();
        navigate('/SignUp')
    }

 return(
 <div>
   
    { auth   ?
        <div className='navbar'>
        <div><Link to="/"  className='nav-design'>Products</Link></div>
        <div><Link to="/AddProduct" className='nav-design'>Add Product</Link></div>
        <div><Link to="/UpdateProduct/:id"  className='nav-design'>Update Product</Link></div>
        <div><Link to="/Profile"  className='nav-design'>Profile</Link></div>
        <div><Link onClick={logout} to="/SignUp" className='nav-design'>LogOut</Link></div>
        </div>
        :
        <div className='navbar'>
        <div><Link to ="/Login" className='nav-design'>Login</Link></div>
        <div><Link to="/SignUp" className='nav-design'>SignUp</Link></div>
        </div>
              
    }
        
    
 </div>
 )
}

export default Navbar