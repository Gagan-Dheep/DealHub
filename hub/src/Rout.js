import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Product from "./Product"
// import NoNavFooterLayout from './NoNavFooterLayout';
const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route  path='/sign-in' element={ <Signin/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
        
          </>
  )
}

export default Rout


