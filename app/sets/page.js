"use client"

import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";
import Body from "@/app/components/layout/body";
import CardGroup from "@/app/components/cards/cardgroup";
import Set from "@/app/components/sets/set";
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '@/app/context/ShoppingCartContext';

export default function SetsPage({ children }) {
    const [cardinfo, setCardinfo] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [cart, setCart] = useContext(CartContext)
    console.log(cart)
    function getRandomCardData() {
        fetch("/sets.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                
                setCardinfo(data);
                setCargando(false);
            })
    }

    useEffect(() => {
    
        getRandomCardData();
    }, []);

    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center mcolor">
            <Nav></Nav>
            <Body>
                <div className="w-[100%]">
                    <div className=" centerxy mt-[15px] w-[80%] h-[35px] mcolor m-[auto] border border-black mb-[20px]   ">
                    <h1 className="text-2xl">Pokemon Card Sets</h1>
                    </div>
                    <CardGroup>

                    {cargando ? (
                        <p> Cargando...</p>
                        ) : (
                        cardinfo.data.slice(0,159).reverse().map((data, index) => (
                            <Set setdata={data} key={index} />
                        ))
                        )}
                    </CardGroup>
                </div>
            </Body>
            <Footer></Footer>
        </main>
    );
}