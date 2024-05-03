"use client"

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { useState, useEffect } from 'react';
export default function Home({ children }) {
    const [cards, setCards] = useState([]);
    function getCardsData() {
        fetch("/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCards(data.data);
            })
    }
    
    useEffect(() => {
        getCardsData()
    }, []);
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
                <CardGroup>
                {cards.slice(0,500).map((cardinfo, index) => (
                    <Card id={index} data={cardinfo} key={index}/>
                ))}
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}