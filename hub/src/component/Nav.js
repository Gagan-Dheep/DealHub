import React from 'react'
import '../style/nav.css'
import {BsBagCheck} from 'react-icons/bs';
const Nav = () => {
  return (
    <>
    <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img src='./images/OIG_mcR5i1qxke-removebg-preview-transformed.png' alt='logo' ></img>
            </div>

            <div className='search-box'>
                <input type='text' placeholder='Search'></input>
                <button>Search</button>
                <BsBagCheck/>
            </div>

           

            
        </div>
    </div>
    </>
  )
}

export default Nav