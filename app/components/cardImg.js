"use client"
//import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
export default function CardImg() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const pokeids = ["hgss4-1", "xy5-1"];
    const [cardinfo, setCardinfo] = useState(["none","none","none", "none"]);
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex]; 
    const idUnico = "1";
    function generarIdUnico() {
        let cardId = localStorage.getItem('cardId');
        if (!cardId) {
            cardId = 1;
        } else {
            cardId = parseInt(cardId) + 1;
        }
        localStorage.setItem('cardId', cardId);
        return cardId.toString();
    }
    

    function getRandomCardData() {
        fetch("http://localhost:3000/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                let card = data.data.find(data => data.id === randomId)
                if (!card) {
                    console.log(null);
                }
                const { name, images, cardmarket } = card;
                const trendPrice = cardmarket?.prices?.trendPrice || "???";
                const { small } = images;
                setCardinfo([name, small, "$"+trendPrice, randomId]);
            })
    }

    function handleImageLoaded(){
        document.getElementById(idUnico+"l").removeAttribute('style');
        document.getElementById(idUnico).removeAttribute('style');
    }

    useEffect(() => {
        getRandomCardData()
    }, []);
    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
                <div style={{display: "block"}} id={idUnico+"l"} className='loader'></div>
                <img style={{display: "none"}} src={cardinfo[1]} id={idUnico} className='h-[279px] w-[200px] text-white' onLoad={handleImageLoaded}></img>
            </div>
        </div>
    );
}