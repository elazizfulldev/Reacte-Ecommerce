import React , { useContext } from 'react'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";
import { FaCartArrowDown , FaShare , FaHeart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContex } from '../contex/CartContex';


export default function Product({item}) {
  const {cartItems , addToCart} = useContext(CartContex)
  console.log(cartItems)
  return (
    <div className='product'>
      
      <Link to={`products/${item.id}`}>
      <div className="img-product">
        <img src={item.images[0]} alt="" />

      </div>
      <p className="name-product">
        {item.title}

      </p>
      </Link>

      <div className="stars">
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarHalfOutline />

      </div>
      <p className="price"><span>$ {item.price}  </span> </p>
      <div className="icons">
        <span onClick={()=> addToCart(item)}><FaCartArrowDown /></span>
        <span><FaHeart /></span>
        <span><FaShare /></span>
        

      </div>
      
    </div>
  )
}
