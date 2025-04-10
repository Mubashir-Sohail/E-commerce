import './App.css'
import React from 'react'
import Navbar from './assets/components/Navbar.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./assets/components/Product.jsx"
import AddProduct from "./assets/components/Add Product.jsx"
import UpdateProduct from './assets/components/Update Product.jsx'
import Logout from './assets/components/Logout.jsx'
import Profile from './assets/components/Profile.jsx'
import Footer from './assets/components/Footer.jsx'
import SignUp from './assets/components/SignUp.jsx'
import PrivateComponent from './assets/components/PrivateCompnent.jsx'
import Login from './assets/Login.jsx'

function App() {
  

  return (
    <div className='body'>
    <div className=''>
    <Router>
         <div className='navbar'> 
         <div><img src='/logo.png' width={'50px'}/> Shoppingo</div>
          <Navbar/>
          </div>
      <div className=''>
      <Routes>
        
        <Route element={<PrivateComponent/>}>
        <Route path='/'  Component={Home}/>
        <Route path='/AddProduct' Component={AddProduct}/>
        <Route path='/UpdateProduct/:id' Component={UpdateProduct}/>
        <Route path='/Logout' Component={Logout}/>
        <Route path='/Profile' Component={Profile}/>
        </Route>
        <Route path='/SignUp' Component={SignUp}/>
        <Route path='/Login' Component={Login}/>
      </Routes>
      </div>

    </Router>

    
    </div>

    <Footer/>
    </div>
  )
}

export default App
