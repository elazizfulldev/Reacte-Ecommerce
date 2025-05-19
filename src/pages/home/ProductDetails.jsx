import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TiStarFullOutline ,TiStarHalfOutline} from "react-icons/ti";

export default function ProductDetails() {

    const {id} = useParams()
    const [product , setproduct] = useState(null)
    const [loading , setloading] = useState(true)

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

    console.log(product)

    if(loading) return <p>Loading.....</p>
    if(product.id != Number(id)) return <p>Product not found</p>

    
  return (
    <div className="item_details">
        <div className="container">
            <div className="img-item">
                <div className="big-img">
                    <img src={product.images[0]} alt={product.title} />

                </div>
                <div className="sm-img">
                    {

                        product.images.map((img , index)=>(

                            <img key={index} src = {img} alt={product.title}/>

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
                <h5>Hurry Up! Only  <span>{product.stock}</span> Product Left In Stock . </h5>
                <h5>Category : <span>{product.category}</span></h5>

            </div>

        </div>

    </div>
  )
}
