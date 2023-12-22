import React from 'react'
import Product_Detail from './component/Product_Detail'
import {BsCartCheckFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import { AiOutlineClose } from "react-icons/ai";
import './product.css'
const Product = ({product,detail,view,close,setClose}) => {
  return (
    <>{
      close?
    <div className='product_details'>

      <div className='container'>
    <button onClick={()=>setClose(false)} className='closebtn'><AiOutlineClose /></button>

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
              <h3>{e.price}</h3>
              <button>Add to Cart</button>
          </div>
        </div>
      )})
        }
      </div>
    </div> :null}
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