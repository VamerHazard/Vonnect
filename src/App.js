import React, {useState, useEffect} from 'react';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3, LoadPage, TypeReg, CustomerRegistration, CompanyRegistration, CustomerRegistrationOTP} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const App = () => {

const [loading, setloading] = useState(false);

useEffect(()=>{
  setloading(true)
  setTimeout(()=>{setloading(false)}, 3000)
}, []);

  return (
    <div className = 'App'>
     {loading ? <LoadPage/> 
    : <Routes>
            <Route path='/' element={<TypeReg/>}/>  
            <Route path='/CustomerRegistration' element={<CustomerRegistration/>}/>
            <Route path='/CustomerRegistration/:id' element={<CustomerRegistrationOTP/>}/>
    </Routes>}
    </div>
  )
}

export default App


 /* 
      <div className = "gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA />
      <Blog/>
      <Footer/>*/