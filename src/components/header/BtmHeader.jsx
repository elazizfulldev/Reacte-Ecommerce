import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link, useLocation} from 'react-router-dom'
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const NavLinks = [
    {title : "Home" , link : "/"},
    {title : "About" , link : "/about"},
    {title : "Accessories" , link : "/accessories"},
    {title : "Blog" , link : "/blog"},
    {title : "Contact" , link : "/contact"},

]

export default function BtmHeader() {

    const location = useLocation()

    const [categories , setCategories] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then((data)=> setCategories(data))
    },[])

    console.log(categories)


  return (
    <div className="btm-header">

        <div className="container">
            <nav className="nav">

                <div className="category-nav">
                    <div className="category-btn">
                        <IoMdMenu />
                        <p>Browse Category</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className="category-nav-list">
                        {categories.map((category) =>(
                            <Link to={category.slug}>{category.name}</Link>
                        ))}

                    </div>


                </div>

                <div className="nav-links">

                    {NavLinks.map((item)=>(

                        <Link to={item.link} className={location.pathname === item.link ? "active" : ""}> {item.title} </Link>

                    ))}
                    

                </div>



            </nav>
            <div className="sign-regs-icon">
                <Link to="/"><PiSignInBold /></Link>
                <Link to="/"><FaUserPlus /></Link>

            </div>
        </div>

    </div>
  )
}
