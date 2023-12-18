import React from 'react'
import Product_Detail from './component/Product_Detail'
import {BsCartCheckFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import './product.css'
const Product = ({product,detail,view}) => {
  return (
    <>
    <div className='product_details'>
      <div className='container'>
        {
          detail.map((e)=>{
      return(
        <div className='productbox'>
          <div className='img-box'>
              <img src={e.img} alt={e.Title} />
          </div>

          <div className='detail'>
              <h4>{e.Cat}</h4>
              <h2>{e.Title}</h2>
              <p>Module build failed (from ./node_modules/babel-loader/lib/index.js):</p>
              <h3>{e.Price}</h3>
              <button>Add to Cart</button>
          </div>
        </div>
      )})
        }
      </div>
    </div>
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
                        <li onClick={()=>view(e)} > <AiOutlineEye /></li>
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