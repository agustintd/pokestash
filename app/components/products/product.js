"use client"
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { CartContext } from '@/app/context/ShoppingCartContext';
export default function Product({ product }) {
    const [inputValue, setInputValue] = useState(1);
    const [cart, setCart] = useContext(CartContext)


    const handleChange = (event) => {


        if (event.target.value <= product.countInStock && event.target.value >= 1) {
            setInputValue(parseInt(event.target.value));
        }
    }
    function AddToCart() {
        const isItemFound = cart.find((item) => item[0] === product.slug);
        if(isItemFound){
            return cart.map((item, index) =>{
                if(item[0] === product.slug){
                    const nuevoarray = [...cart]
                    if(nuevoarray[index][1] + inputValue > product.countInStock){
                        return console.log("NO HAY STOCK")
                    }
                    else{
                    nuevoarray[index][1] = nuevoarray[index][1] + inputValue
                    nuevoarray[index][2] = nuevoarray[index][1]*product.price
                    setCart(nuevoarray)
                    }
                }
            })
        }
        else{
            console.log("No me encontro")
            setCart([...cart,[product.slug, inputValue, product.price*inputValue]])
        }
        console.log("POST PROCESO")
        console.log(cart)
        
        //setCart([...cart, [product.slug, inputValue, product.price]]);  
               

    }

    function AddNumber() {
        if (inputValue < product.countInStock)
            setInputValue(inputValue + 1)
    }
    function RemoveNumber() {
        if (inputValue > 1)
            setInputValue(inputValue - 1)
    }
    useEffect(() => {
        console.log(cart)
    }, [cart]);
    return (
        <div id={product.slug} className="flex-col centerxy">
            <img src={product.image} className="w-[150px] mb-[3px] "></img>
            <p>{product.name}</p>
            <p className="text-green-500">{product.countInStock} in stock</p>
            <p className=" text-green-500">${product.price}</p>
            <div className="flex flex-row">
                <button className="pr-[5px]" onClick={() => AddToCart(product)}>Add to cart</button>
                <button onClick={AddNumber}>+</button>
                <input id={product.slug} onChange={handleChange} type="number" value={inputValue} min="1" max={product.countInStock} className="w-[50px] text-black" />
                <button onClick={RemoveNumber}>-</button>
            </div>
        </div>
    )
}