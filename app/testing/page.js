"use client"
import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";
import Body from "@/app/components/layout/body";
import CardGroup from "@/app/components/cards/cardgroup";
import Card from "@/app/components/cards/card";
import CardRandom from "@/app/components/cards/cardrandom";
import { useState, useEffect } from 'react';
import { crearArrayAleatorio, fetchJSON, crearArrayVacio } from "@/app/functions/fetch";
import { pokeids } from '@/app/utils/cardsids';

export default function HomePage({ children }) {
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