"use client"
import { useState, useEffect } from 'react';
import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";
import Body from "@/app/components/layout/body";
import { pokeids } from '@/app/utils/cardsids';
import CardSkeleton from "@/app/components/skeletons/cardskeleton";
import '@/app/styles/card.css';
// borrar
function CardPage() {
    const [cardinfo, setCardinfo] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(0);
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex];
    const [colorIndex, setColorIndex] = useState(0);
    const [displayValue, setDisplayValue] = useState("flex");
    const [colorPrice, setColorPrice] = useState("white");
    const [rainbowText, setRainbowText] = useState(false);
    const [transitionTime, setTransitionTime] = useState("0s");
    function handleImageLoaded() {
        setDisplayValue("none");
    }
    
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
    function getCardData(targetId) {
        fetch("/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                let card = data.data.find(data => data.id === targetId)
                if (!card) {
                    console.log(null);
                }
                setCardinfo(card);
                setLoaded(true);
            })
    }

    useEffect(() => {
        getCardData(randomId)
    }, []);
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav />
            <Body>
                <div className="centerxy flex-col">
                    <h1 className="text-2xl">Mega Sceptile EX</h1>
                    <div className='centerxy h-[279px] w-[200px]'>
                        <CardSkeleton style={displayValue}></CardSkeleton>
                        <img style={cardStyle} src={cardinfo[1]} id={id + "img"} className='h-[279px] w-[200px] rounded-[8px]' onLoad={handleImageLoaded}></img>
                    </div>
                    <div className="centerxy precios">
                        <div className="cont-precio">
                            TCG Player
                            <hr></hr>
                            2.99
                        </div>
                        <div className="cont-precio">
                            Troll and Toad
                            <hr></hr>
                            2.99
                        </div>
                        <div className="cont-precio">
                            eBay
                            <hr></hr>
                            2.99
                        </div>
                        <div className="cont-precio">
                            CardMarket
                            <hr/>
                                1.99
                        </div>
                    </div>

                </div>
                

            </Body>
            <Footer />
        </main>
    );
}

export default CardPage;
