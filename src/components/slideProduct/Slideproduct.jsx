import React from 'react'
import Product from './Product'
import './slideProduct.css'

export default function SlideProduct() {
  return (
    <div className='slide-products slide'>
        <div className="container">
            <div className="top-slide">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet.</p>

                
            </div>
            <Product/>

        </div>
   
    </div>
  )
}
