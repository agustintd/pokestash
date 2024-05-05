"use client"

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { crearArrayVacio } from "../functions/fetch";
import { useState, useEffect } from 'react';
export default function CardsPage({ children }) {
    const [cards, setCards] = useState(crearArrayVacio(12));
    const [loadedcards, setLoadedCards] = useState(12);
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
    useEffect(() => {
        window.onscroll = function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setLoadedCards(loadedcards + 24)
            }
        };
    }, [loadedcards]);
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
                <CardGroup>
                    {cards.slice(0, loadedcards).map((cardinfo, index) => (
                        <Card id={index} data={cardinfo} key={index} />
                    ))}
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}