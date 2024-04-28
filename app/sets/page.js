"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Sets from "@/app/components/sets";
import { useState, useEffect } from 'react';
export default function Home({ children }) {
    const [cardinfo, setCardinfo] = useState([]);
    const [cargando, setCargando] = useState(true);
    function getRandomCardData() {
        fetch("/pokemon/sets.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                console.log(Object.values(data))
                setCardinfo(data);
                setCargando(false);
            })
    }
    
    /*const setBg = {
        backgroundImage: `url(${cardinfo[1]})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center'
    };*/

    useEffect(() => {
    
        getRandomCardData();
    }, []);

    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
                <CardGroup>

                {cargando ? (
                    <p> Cargando...</p>
                    ) : (
                    cardinfo.data.map((item, index) => (
                        <Sets riot={item} key={index} />
                    ))
                    )}
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}