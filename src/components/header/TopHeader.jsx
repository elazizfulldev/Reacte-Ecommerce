import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logoecomm.jpg'
import { FaSearch } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"
import './header.css'
import { CartContex } from '../contex/CartContex'


function TopHeader() {

    const {cartItems} = useContext(CartContex)
  return (
    <div className="top-header">
        <div className="container">
        <Link className='logo' to ="/">
        <img src={Logo} alt="" />
        </Link>

        <form action="" className="search-box">
            <input type="text" name='search' placeholder='Search For Product' />
            <button type='submit'><FaSearch /></button>

        </form>

        <div className="header-icons">
            <div className="icon">
                <FaRegHeart />
                <span className='count'>0</span>

            </div>
            <div className="icon">
                <Link to="/cart">
                <BsCart4 />
                <span className='count'>{cartItems.length}</span>
                </Link>

            </div>

        </div>

        </div>

    </div>
  )
}

export default TopHeader