import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Product from "./Product"
// import NoNavFooterLayout from './NoNavFooterLayout';
const Rout = ({detail,product,view,close,setClose}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product product={product} detail={detail} view={view} close={close} setClose={setClose}/>} />
            <Route  path='/sign-in' element={ <SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        
          </>
  )
}

export default Rout


