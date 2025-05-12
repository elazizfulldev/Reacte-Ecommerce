import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
        <h2>{product.title}</h2>
    </div>
  )
}
