
"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { useState, useEffect } from 'react';
import {fetchJSON } from "@/app/functions/fetch";

export default function Setslayout({params}) {
  const [Infoset, setInfoset] = useState('');
  const [url, setUrl] = useState('');



 
useEffect(() => {
  console.log(params.setid)
  fetchJSON("set", params.setsid, "name", false)
  .then(rsp => {
      console.log(rsp);
      setInfoset(rsp);
      setUrl(rsp.images.logo)

  })
}, []);


    return (
      
        <main className="flex min-h-screen  flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
              <div className="centerxy flex-col">
              <img className="h-[100px] w-[auto] max-w-[300px] mt-[20px]" src={url}></img>
              <h1 className="mt-[10px]">{Infoset.name}</h1>

              </div>
              <CardGroup>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}