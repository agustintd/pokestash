"use client"
////import { pokeids } from './pokeids';
import { useState, useEffect } from 'react';
import CardSkeleton from './cardskeleton';
import TextSkeleton from './textskeleton';
export default function Card() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [urlRaiz, setUrlRaiz] = useState('');
    const [idUnico, setIdUnico] = useState('');
    const pokeids = ["hgss4-1", "xy5-1"];
    const [cardinfo, setCardinfo] = useState(["-","-","-","-"]);
    const [displayValue, setDisplayValue] = useState("flex");
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex]; 
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
        fetch(urlRaiz+"/pokemon/cards.json")
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
        setDisplayValue("none");
        document.getElementById(idUnico).removeAttribute('style');
    }

    useEffect(() => {
        setIdUnico(generarIdUnico())
        setUrlRaiz(window.location.origin)
        getRandomCardData()
    }, []);
    return (
        <div className='card-container'>
            <div className='centerxy h-[279px] w-[200px]'>
                <CardSkeleton style={displayValue} id={idUnico+"l"}></CardSkeleton>
                <img style={{display: "none"}} src={cardinfo[1]} id={idUnico} className='h-[279px] w-[200px] text-white' onLoad={handleImageLoaded}></img>
            </div>

            <div className='topDiplay '>
                <h1 className='cardName'>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay'>
                
                <span className='cardNumber'>{cardinfo[3]}</span>

                <span className='cardPrice'> {cardinfo[2]}</span>
            </div>
        </div>
    );
}