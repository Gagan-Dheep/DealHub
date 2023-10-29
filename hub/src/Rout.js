import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signin from './component/Signin'
import Signup from './component/Signup'
// import NoNavFooterLayout from './NoNavFooterLayout';





const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/sign-in' element={ <NoNavFooterLayout><Signin/></NoNavFooterLayout>}/>
            <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
    </>
  )
}

export default Rout