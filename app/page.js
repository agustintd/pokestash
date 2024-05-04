"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import CardRandom from "./components/cardRandom";
import { useState, useEffect } from 'react';
import { crearArrayAleatorio, fetchJSON, crearArrayVacio } from "./functions/fetch";
import { pokeids } from './components/pokeids';

export default function Home({ children }) {
    const [cards, setCards] = useState(crearArrayVacio(12));
    useEffect(() => {
        fetchJSON("card", crearArrayAleatorio(pokeids, 12), "id")
            .then(rsp => {
                setCards(rsp)
            })
    }, []);
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <CardGroup>
                    {cards.map((cardinfo, index) => (
                        <Card id={index} key={index} data={cardinfo} />
                    ))}
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}