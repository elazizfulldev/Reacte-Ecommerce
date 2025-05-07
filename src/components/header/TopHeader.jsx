import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../img/icon.png'
import { FaSearch } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"
import './header.css'


function TopHeader() {
  return (
    <div className="top-header">
        <div className="container">
        <Link className='logo' to ="/">
        <img src={Icon} alt="" />
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
                <BsCart4 />
                <span className='count'>0</span>

            </div>

        </div>

        </div>

    </div>
  )
}

export default TopHeader