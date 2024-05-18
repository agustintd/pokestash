
"use client"
import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";
import Body from "@/app/components/layout/body";
import CardGroup from "@/app/components/cards/cardgroup";
import Card from "@/app/components/cards/card";
import { useState, useEffect } from 'react';
import { fetchJSON } from "@/app/functions/fetch";
import CardRandom from "@/app/components/cards/cardrandom";

export default function Setslayout({ params }) {
  const [infoSet, setInfoSet] = useState([]);
  const [url, setUrl] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchJSON("set", params.setsid, "name", false)
      .then(rsp => {
        setInfoSet(rsp);
        setUrl(rsp.images.logo)
        fetchJSON("card", rsp.id, "id", "setcards")
          .then(rsp2 => {
            setCards(rsp2)
          })
      })

  }, []);


  return (

    <main className="flex min-h-screen  flex-col items-center justify-center  mcolor ">
      <Nav></Nav>
      <Body>
        <div className="centerxy flex-col">
          <img className="h-[100px] w-[auto] max-w-[300px] mt-[20px]" src={url}></img>
          <h1 className="mt-[10px]">{infoSet.name}</h1>

        </div>
        <CardGroup>
          {cards.map((cardinfo, index) => (
            <Card id={index} data={cardinfo} key={index} />
          ))}
        </CardGroup>
      </Body>
      <Footer></Footer>
    </main>
  );
}