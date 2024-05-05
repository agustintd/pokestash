"use client"
import { filtrarString } from "@/app/functions/fetch";
import { useState, useEffect } from 'react';
export default function Product({ product }) {
    const [temporalfcs, setTemporalfcs] = useState(1);
    function AddNumber() {
        if (temporalfcs < 10)
            setTemporalfcs(temporalfcs + 1)
    }
    function RemoveNumber() {
        if (temporalfcs > 1)
            setTemporalfcs(temporalfcs - 1)
    }
    return (
        <div id={product.slug} className="flex-col centerxy">
            <img src={product.image} className="w-[150px] mb-[3px] "></img>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <div className="flex flex-row">
                <button className="pr-[5px]">Add to cart</button>
                <button onClick={AddNumber}>+</button>
                <input readOnly type="number" value={temporalfcs} min="1" max="10" className="w-[50px] text-black"/>
                <button onClick={RemoveNumber}>-</button>
            </div>
        </div>
    )
}