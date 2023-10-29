import React from 'react'
import {Link} from 'react-router-dom'
import './style/home.css'

const Home = () => {
  return (
   <>
   <div className='home'>
      <div className='container'>
        <div className='content'>
            <h3>Welcome to DealHub</h3>
            <p>Looking for great deals or a way to sell your items for cash? Look no further! DealHub is your one-stop shop for all your buying and selling needs</p>
            <div className='button'>
              <Link to='/product' className='Shop-link'>SHOP NOW</Link>
            </div>
        </div>

        <div className='image'>
            <img src='./images/istockphoto-1333053202-612x612-removebg-preview.png' alt='watch'></img>
        </div>
      </div>
   </div>

  </>
  )
}

export default Home