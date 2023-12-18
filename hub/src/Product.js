import React from 'react'
import Product_Detail from './component/Product_Detail'
import {BsCartCheckFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import './product.css'
const Product = () => {
  return (
    <>
      <div className='product'>
        <div className='container'>
          {
            Product_Detail.map((e)=>{
              return(
                <>
                  <div className='box' key={e.id}>
                    <div className='img-box'>
                      <img src={e.img} alt={e.title}></img>
                    </div>
                    
                    <div className='icon'>
                        <li>   <BsCartCheckFill className='ibox'/> </li>
                        <li > <AiOutlineEye /></li>
                        <li> <AiOutlineHeart className='ibox'/></li> 
                    </div>

                    <div className='detail'>
                      <p>{e.Cat}</p>
                      <h3>{e.Title}</h3>
                      <h3>{e.price}</h3>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Product