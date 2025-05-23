import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";
import { FaCartArrowDown , FaShare , FaHeart , FaRegHeart} from "react-icons/fa";
import './ProductDetails.css'

export default function ProductDetails() {

    const {id} = useParams()
    const [product , setproduct] = useState(null)
    const [loading , setloading] = useState(true)
    const [relatedProduct , setRelatedProduct] = useState([])
    const [loadingRelatedProduct , setLoadingRelatedProduct] = useState(true)

    console.log(id )

    useEffect(()=>{
        const fetchproducts = async ()=>{

            try{

                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setproduct(data)
                /*=== when fetching product data with id . so the loading is don =====*/
                setloading(false)

            }catch(error){
                console.log(error)
            }

        }

        fetchproducts()
    },[id])

    useEffect(()=>{

        if(!product) return

        fetch(`https://dummyjson.com/products/category/${product.category}`)
        .then((res)=> res.json())
        .then((data)=>{
            setRelatedProduct(data)
        })
        .catch((error)=>console.error(error))
        .finally(()=> setLoadingRelatedProduct(false))

    },[product?.category])

    console.log(product)

    if(loading) return <p>Loading.....</p>
    if(product.id != Number(id)) return <p>Product not found</p>

    
  return (
    <div className="item-details">
        <div className="container">
            <div className="img-item">
                <div className="big-img">
                    <img id='big-img' src={product.images[0]} alt={product.title} />

                </div>
                <div className="sm-img">
                    {

                        product.images.map((img , index)=>(

                            <img key={index} src = {img} alt={product.title} onClick={()=>document.getElementById("big-img").src = img } />

                        ))

                    }

                </div>
            </div>

            <div className="details-item">
                <h1 className='name'>{product.title}</h1>
                <div className="stars">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarHalfOutline />

                </div>

                <p className="price">$ {product.price}</p>
                <h5>Availability : <span>{product.availabilityStatus}</span></h5>
                <h5>Brand : <span>{product.brand}</span></h5>
                <p className='desc'>{product.description}</p>
                <h5 className='stock'>Hurry Up! Only  <span>{product.stock}</span> Product Left In Stock . </h5>
                <h5 className='category'>Category : <span>{product.category}</span></h5>
                <button className='btn'> <FaCartArrowDown /> Add to cart</button>

                <div className="icons">
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
                
                

            </div>

        </div>

    </div>
  )
}
