import React from 'react'
import '../style/nav.css'
import {BsBagCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img src='./images/OIG_mcR5i1qxke-removebg-preview-transformed.png' alt='logo' ></img>
                <p className='logo-header'>DEALHUB</p>
            </div>

            <div className='search-box'>
                <input type='text' placeholder='Search'></input>
                <button>Search</button>
            </div>

            <div className='icon'>
                 <BsBagCheck/>
            </div>

            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='sell' className='link'>Sell</Link>
                            </li>
                            <li>
                                <Link to='sign-in' className='link'>Sign-in</Link>
                            </li>
                            <li>
                                <Link to='sign-up' className='link'>Sign-up</Link>
                            </li>
                            <li>
                                <Link to='cart' className='link'>Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>       
        </div>
    </div>
    </>
  )
}

export default Nav