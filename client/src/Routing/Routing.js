import React from 'react'
import {BrowserRouter, Route,  Routes} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Header from '../Component/Header'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
function Routing() {
  return (
    <>
    <BrowserRouter>
   
    
    <Header/>
    <Routes>
    
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing
