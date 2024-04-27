"use client"
import { useState, useEffect } from 'react';
export default function Sets() {
    const [cardinfo, setCardinfo] = useState(["none","none","none", "none"]);
    const [urlRaiz, setUrlRaiz] = useState('');
    const pokeids = ["base2","ecard2"];
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex]; 
    function getRandomCardData() {
        fetch(urlRaiz+"/pokemon/extracto.json")
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
                const { name, images, releaseDate } = card;
                const { logo } = images;
                setCardinfo([name, logo, releaseDate, randomId]);
            })
    }
    
    const setBg = {
        backgroundImage: `url(${cardinfo[1]})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center'
    };

    useEffect(() => {
        setUrlRaiz(window.location.origin)
        getRandomCardData()
    }, []);
    return (
        <div className='set-container'>
            <img  src={cardinfo[1]} id="img1" className='h-[100px] w-[200px]  text-white'></img>
            <div className='topDiplay centerxy'>
                <h1 className=''>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay centerxy'>
                <span className='set-date'> Release {cardinfo[2]}</span>
            </div>
        </div>
    );
}