import React from 'react'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";
import { FaCartArrowDown , FaShare , FaHeart} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Product({item}) {
  console.log(item)
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
        <span><FaCartArrowDown /></span>
        <span><FaHeart /></span>
        <span><FaShare /></span>
        

      </div>
      
    </div>
  )
}
