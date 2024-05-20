"use client"
//import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
import CardSkeleton from '@/app/components/skeletons/cardskeleton';
import TextSkeleton from '@/app/components/skeletons/textskeleton';

export default function Card({ id, data }) {
    const [colorIndex, setColorIndex] = useState(0);
    const [cardinfo, setCardinfo] = useState(["", "", "", ""]);
    const [displayValue, setDisplayValue] = useState("flex");
    const [colorPrice, setColorPrice] = useState("white");
    const [rainbowText, setRainbowText] = useState(false);
    const [transitionTime, setTransitionTime] = useState("0s");
    const colors = ['#FF0000', '#FF7F00', '#FFFF00','#FFFF00','#FFFF00','#FF0000'];
    
    const cardStyle = {
        display: (displayValue == "none") ? 'inline' : 'none',
        boxShadow: rainbowText ? '0 0px 25px -15px'+colors[colorIndex] : 'none',
        transition: 'box-shadow '+transitionTime
    }
    const priceStyle = {
        color: colorPrice,
        transition: 'color '+transitionTime,
        float: "right"
    }

    function handleImageLoaded() {
        setDisplayValue("none");
    }
    function decorCardPrice(price) {
        price = Math.floor(price)
        price >= 0 ? setColorPrice("rgb(var(--price-low))") : ""
        price > 4 ? setColorPrice("rgb(var(--price-mid))") : ""
        price > 9 ? setColorPrice("rgb(var(--price-good))") : ""
        price > 20 ? setColorPrice("rgb(var(--price-epic))") : ""
        price > 40 ? setColorPrice("rgb(var(--price-god))") : ""
        price >= 90   ? setRainbowText(true) : setRainbowText(false)
    }
    

    useEffect(() => {
        let name = data.name || "";
        let imageUrl = data.images?.small || "";
        let price = data.cardmarket?.prices?.trendPrice || "";
        decorCardPrice(price)
        price = (price != "") ? " $" + price : "";
        let number = data.number || "";
        setCardinfo([name, imageUrl, price, number]);

    }, [data]);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        rainbowText ? (setColorPrice(colors[colorIndex]), setTransitionTime("1s")) : ""
    }, [colorIndex]);
    
    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
                <CardSkeleton style={displayValue}></CardSkeleton>
                <img style={cardStyle} src={cardinfo[1]} id={id + "img"} className='h-[279px] w-[200px] rounded-[8px]' onLoad={handleImageLoaded}></img>
            </div>

            <div className='topDiplay '>
                <h1 className='cardName'>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay'>

                <span className='cardNumber'>{cardinfo[3]}</span>

                <span style={priceStyle} className='cardPrice'>{cardinfo[2]}</span>
            </div>
        </div>
    );
}