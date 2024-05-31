import React from 'react'
import {BrowserRouter, Route,  Routes} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Header from '../Component/Header'
import Dashboard from '../Dashboard/Dashboard'
function Routing() {
  return (
    <>
    <BrowserRouter>
   
    
    <Header/>
    <Routes>
    
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing
