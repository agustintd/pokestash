"use client"

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import CardOk from "@/app/components/cardOk";
import { useState, useEffect } from 'react';
export default function Home({ children }) {
    const [cards, setCards] = useState([]);
    function getRandomCardData() {
        fetch("/pokemon/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCards(data.data);
                console.log(data.data)
            })
    }
    
    useEffect(() => {
        getRandomCardData()
    }, []);
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
                <CardGroup>
                {cards.slice(0,500).map((cardinfo, index) => (
                    <CardOk id={index} data={cardinfo}/>
                ))}
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}