import React, { useEffect, useState } from 'react'
import Heroslider from '../../components/Heroslider'
import './home.css'
import SlideProduct from '../../components/slideProduct/slideProduct'

const categories = ["smartphones", "mobile-accessories", "laptops", "womens-watches", "tablets","sports-accessories", "sunglasses"]

export default function Home() {

  const [products , setProducts]= useState({})
   const [loading , setLoading]= useState(true)

  

  useEffect(()=>{
    const fetchProducts = async ()=> {
        try{
            const result = await Promise.all(
              categories.map(async (category) => {
                const res = await fetch(`https://dummyjson.com/products/category/${category}`)
                const data = await res.json()
                return {[category] : data.products}
              })
            )

            const productData = Object.assign({}, ...result)
            setProducts(productData)
            

        }catch(error){
          console.error("error fetching" , error)
        } finally{

          setLoading(false)

        }
    }

    fetchProducts()
  },[])

  console.log(products["smartphones"])
  
  return (
    <div>
        <Heroslider/>



        {loading ? (<p>Loading...</p>) : (

          categories.map((category)=>(

          
            <SlideProduct key={category} data={products[category]} title={category} />
          
           


        ))

        ) }
       
       
        
       
        
    </div>
  )
}
