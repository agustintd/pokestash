"use client"
//import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
import CardSkeleton from './cardskeleton';
import TextSkeleton from './textskeleton';
import '@/public/css/effects.css';

export default function CardShiny({ id, data }) {
    const [loaded, setLoaded] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);
    const [cardinfo, setCardinfo] = useState(["", "", "", ""]);
    const [displayValue, setDisplayValue] = useState("flex");
    const [colorPrice, setColorPrice] = useState("white");
    const [rainbowText, setRainbowText] = useState(false);
    const [cardAnimation, setCardAnimation] = useState(false);
    const [transitionTime, setTransitionTime] = useState("0s");
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#FFFF00', '#FFFF00', '#FF0000'];
    const cardStyle = {
        display: (displayValue == "none") ? 'inline' : 'none',
        boxShadow: rainbowText ? '0 0px 25px -15px' + colors[colorIndex] : 'none',
        transition: 'box-shadow ' + transitionTime,
        backgroundImage: 'url(' + cardinfo[1] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const priceStyle = {
        color: colorPrice,
        transition: 'color ' + transitionTime
    }

    function decorCardPrice(price) {
        price = Math.floor(price);
        setColorPrice("rgb(var(--price-low))")
        setCardAnimation(false);
        setRainbowText(false);
        if (price > 40) {
            setColorPrice("rgb(var(--price-legend))");
            setCardAnimation(true);
            setRainbowText(true);
            return;
        }
        if (price > 20) {
            setColorPrice("rgb(var(--price-god))");
            return;
        }
        if (price > 9) {
            setColorPrice("rgb(var(--price-epic))");
            return;
        }
        if (price > 4) {
            setColorPrice("rgb(var(--price-good))");
            return;
        }
        if (price >= 0.99) {
            setColorPrice("rgb(var(--price-mid))");
            return;
        }    
    }
    const efectStyle = {
        display: 'inline',
        boxShadow: rainbowText ? '0 0px 25px -15px' + colors[colorIndex] : 'none',
        transition: 'box-shadow ' + transitionTime
    }

    useEffect(() => {
        let name = data.name || "";
        let imageUrl = data.images?.small || "";
        let price = data.cardmarket?.prices?.trendPrice || "";
        decorCardPrice(price)
        price = (price != "") ? " $" + price : "";
        let number = data.number || "";
        setCardinfo([name, imageUrl, price, number]);
        var tmpimg = new Image();
        tmpimg.onload = function () {
            setDisplayValue("none");
        }
        tmpimg.src = imageUrl;
    }, [data]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/animation.js';
        script.async = true;
        document.body.appendChild(script);
        const interval = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 400);
        return () => {
            clearInterval(interval)
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        rainbowText ? (setColorPrice(colors[colorIndex]), setTransitionTime("1s")) : ""
    }, [colorIndex]);

    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
                <CardSkeleton style={displayValue}></CardSkeleton>
                <div style={cardStyle} id={id + "img"} className={cardAnimation ? `spcard animated h-[279px] w-[200px] rounded-[8px]` : 'h-[279px] w-[200px] rounded-[8px] spcard animated'} />
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