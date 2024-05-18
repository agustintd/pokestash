"use client"
import { useState, useEffect } from 'react';
import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";
import Body from "@/app/components/layout/body";
import { pokeids } from '@/app/utils/cardsids';

function CardPage() {
    const [cardinfo, setCardinfo] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(0);
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex]; 
    function getCardData() {
        fetch("/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCardinfo(data.data[id]);
            })
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
                <div>
                    {!loaded ? <div>Cargando...</div> : 
                        <img src={cardinfo.images.large} id="img1" className='h-[279px] w-[200px] text-white' />}
                </div>
                <div className="centerxy mt-[15px] w-[80%] h-[35px] mcolor m-[auto] border border-black mb-[20px]">
                    <h1 className="text-2xl">{cardinfo.name}</h1>
                </div>
            </Body>
            <Footer />
        </main>
    );
}

export default CardPage;
