import React from 'react'
import {Link} from 'react-router-dom'
import '../style/footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='box'>
            <h3 className='foottext'>About us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque aperiam adipisci nesciun</p>
          </div>

          <div className='box'>
            <h3 className='foottext'>quick link</h3>
            <Link to='/' className='link'>Home</Link>
            <Link to='/product' className='link'>Product</Link>
            <Link to='sell' className='link'>Sell</Link>
            <Link to='sign-in' className='link'>Sign-in</Link>
            <Link to='sign-up' className='link'>Sign-up</Link>
          </div>

          <div className='box'>
          <h3 className='foottext'>Follow us on</h3>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
          </div>

        <div className='box'>
          <h3 className='foottext'>contact info</h3>
          <p>Phone no. : 765-213-1234</p>
          <p>Email : test1@gamail.com</p>
        </div>
        
        </div>
        <h1 className="copyright">
            &copy; copyright @ 2023 by DEALHUB
        </h1>
      </div>
    </>
  )
}

export default Footer