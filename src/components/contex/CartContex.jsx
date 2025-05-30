import React, { createContext, useEffect, useState } from 'react'

export const CartContex = createContext()

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(()=>{

        const savedCart = localStorage.getItem('cardItems');
        return savedCart ? JSON.parse(savedCart) : []

    })

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
    }

    useEffect(()=>{
        localStorage.setItem('cardItems' , JSON.stringify(cartItems))
    } , [cartItems])

    return (
        <CartContex.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContex.Provider>
    )
}
