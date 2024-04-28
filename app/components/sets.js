/*"use client"
import { useState, useEffect } from 'react';
export default function Sets({setsid}) {
    const [cardinfo, setCardinfo] = useState(["none","none","none", "none"]);
   // const pokeids = ["base2","ecard2"];
    function getRandomCardData() {
        fetch(urlRaiz+"/pokemon/sets.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                let card = data.data.find(data => data.id === setsid)
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
}*/

export default function Sets({riot}){
    console.log(riot)
    return(
        <div className='set-container'>
        <img  src={riot.images.logo} id="img1" className='h-[85px] w-[175px]  text-white'></img>
        <div className='topDiplay centerxy'>
            <h1 className=''>{riot.name}</h1>
        </div>
        <div className='bottom-diplay centerxy'>
            <span className='set-date'> Release {riot.releaseDate}</span>
        </div>
    </div>
    )
}