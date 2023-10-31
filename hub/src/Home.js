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

   <div className='about'>
   <h2 className='heading'>About DealHub</h2>
    <div className='container'>
        <div className='image'>
            <img src='./images/istockphoto-1333053202-612x612-removebg-preview.png' alt='watch'></img>
        </div>
        <div className='content'>
          <p>Our mission at DealHub is to empower individuals and businesses to connect and trade in a convenient and secure online environment. We believe that everyone has something valuable to offer, and we're here to help you unlock the potential of your unused items or discover hidden gems at unbeatable prices.</p>
        </div>
    </div>
   </div>

   <div className='newsletter'>
    <h2 className='heading'>SUBCRIBE FOR NEW FEATURES</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque aperiam adipisci nesciunt
    voluptate dicta autem quibusdam iure sunt. Totam.</p>

    <form>
      <input type='email' placeholder='Enter Your Email'></input>
      <input type='submit' placeholder='submit'></input>
    </form>
      </div>
   
   <div className='contact'>
   <h2 className='heading'>Contact Us</h2>
    <div className='container'>
      <div className='image'>
        <img src='./images/contact-us-illustration-scaled.png' alt='contact'/>
      </div>

      <div className='form'>
        <form>
          <div className='link'>
            <input type='text' placeholder='text'></input>
          </div>
          <div className='link'>
            <input type='email' placeholder='email'></input>
          </div>
          <div className='link'>
            <input type='phone' placeholder='phone'></input>
          </div>
          <div className='link'>
            <textarea type='text' placeholder='message'></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
   </div>

  </>
  )
}

export default Home