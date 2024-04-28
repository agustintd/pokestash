"use client"
//import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
import CardSkeleton from './cardskeleton';
import TextSkeleton from './textskeleton';
export default function CardOk({id, data}) {
    const [cardinfo, setCardinfo] = useState(["","","",""]);
    const [displayValue, setDisplayValue] = useState("flex");

    function handleImageLoaded1(){
        setDisplayValue("none");
        document.getElementById(id+"xd").removeAttribute('style');
    }
    useEffect(() => {
        setCardinfo([data.name,data.images.small,"",data.id]);
    }, []);

    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
            <CardSkeleton style={displayValue}></CardSkeleton>
            <img style={{display: "none"}} src={cardinfo[1]} id={id+"xd"} className='h-[279px] w-[200px] text-white' onLoad={handleImageLoaded1}></img>
            </div>

            <div className='topDiplay '>
                <h1 className='cardName'>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay'>
                
                <span className='cardNumber'>{cardinfo[3]}</span>

                <span className='cardPrice'>{cardinfo[2]}</span>
            </div>
        </div>
    );
}