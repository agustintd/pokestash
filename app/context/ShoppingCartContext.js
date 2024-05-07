"use client"
import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children}) =>{

    const [cart, setCart] = useState([["product","cantidad","precio"]]);

    return(
        <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>
    )
}