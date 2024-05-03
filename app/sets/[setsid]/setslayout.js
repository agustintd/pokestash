
"use client"
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
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
          {params.setsid}
          <p>{Infoset.name}
          {Infoset.id}
          </p>
          <img src={url}></img>

        </main>
    );
}