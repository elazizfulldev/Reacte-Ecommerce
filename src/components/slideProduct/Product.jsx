import React from 'react'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";
import { FaCartArrowDown , FaShare , FaHeart} from "react-icons/fa";


export default function Product({title,price}) {
  return (
    <div className='product'>
      <div className="img-product">
        <img src="https://images.ctfassets.net/q17uls4wkkdz/5ukkfCIlV0wWf2bL9Nr1wx/736b5ef0c3e8de5c69067b67337a2f66/Unbenannt-3-1024x1024.jpg?fm=webp&w=700" alt="" />

      </div>
      <p className="name-product">
        {title}

      </p>

      <div className="stars">
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarHalfOutline />

      </div>
      <p className="price"><span>$ {price}  </span> </p>
      <div className="icons">
        <span><FaCartArrowDown /></span>
        <span><FaHeart /></span>
        <span><FaShare /></span>
        

      </div>
      
    </div>
  )
}
