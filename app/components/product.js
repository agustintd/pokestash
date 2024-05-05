"use client"
import { filtrarString } from "@/app/functions/fetch";
import { useState, useEffect } from 'react';
export default function Product({ product }) {
    const [inputValue, setInputValue] = useState(1);
    const handleChange =(event)=> {

        if (event.target.value <=product.countInStock && event.target.value >= 1) {
            setInputValue(event.target.value);
          }
    }
    function AddToCart() {
        
    }
   function AddNumber() {
        if (inputValue < product.countInStock)
            setInputValue(inputValue + 1)
    }
    function RemoveNumber() {
        if (inputValue > 1)
            setInputValue(inputValue - 1)
    }
    return (
        <div id={product.slug} className="flex-col centerxy">
            <img src={product.image} className="w-[150px] mb-[3px] "></img>
            <p>{product.name}</p>
            <p className="text-green-500">{product.countInStock} in stock</p>
            <p className=" text-green-500">${product.price}</p>
            <div className="flex flex-row">
                <button className="pr-[5px]" onClick={AddToCart}>Add to cart</button>
                <button onClick={AddNumber}>+</button>
                <input id="random" onChange={handleChange} type="number" value={inputValue} min="1" max={product.countInStock} className="w-[50px] text-black"/>
                <button onClick={RemoveNumber}>-</button>
            </div>
        </div>
    )
}