import React , { useContext } from 'react'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";
import { FaCartArrowDown , FaShare , FaHeart , FaRegHeart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContex } from '../contex/CartContex';


export default function Product({item}) {
  const {cartItems , addToCart} = useContext(CartContex)
  console.log(cartItems)
  const isInCart = cartItems.some(i => i.id === item.id);
  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      
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
        <span className='to-cart' onClick={()=> addToCart(item)}><FaCartArrowDown /></span>
        <span><FaRegHeart /></span>
        <span><FaShare /></span>
        

      </div>
      
    </div>
  )
}
