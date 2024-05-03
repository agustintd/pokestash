"use client"
//import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
import CardSkeleton from './cardskeleton';
import TextSkeleton from './textskeleton';
export default function Card({id, data}) {
    const [cardinfo, setCardinfo] = useState(["","","",""]);
    const [displayValue, setDisplayValue] = useState("flex");

    function handleImageLoaded(){
        setDisplayValue("none");
        document.getElementById(id+"img").removeAttribute('style');
    }
    useEffect(() => {
        let name = data.name || "";
        let imageUrl = data.images?.small || "";
        let price = data.cardmarket?.prices?.trendPrice || "";
        price = (price != "") ? " $"+price : "";
        let number = data.number || "";
    
        setCardinfo([name, imageUrl, price, number]);
    }, []);

    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
            <CardSkeleton style={displayValue}></CardSkeleton>
            <img style={{display: "none"}} src={cardinfo[1]} id={id+"img"} className='h-[279px] w-[200px] text-white' onLoad={handleImageLoaded}></img>
            </div>

            <div className='topDiplay '>
                <h1 className='cardName'>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay'>
                
                <span className='cardNumber'>{cardinfo[3]}</span>

                <span className='cardPrice text-yellow-500'>{cardinfo[2]}</span>
            </div>
        </div>
    );
}