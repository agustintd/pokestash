"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { useState, useEffect } from 'react';
import data from "../utils/codigos";
import Product from "../components/product";


export default function codes({ children }) {
    console.log(data);
    const [Temporalfcs, setTemporalfcs] = useState(1);
    function AddNumber() {
        if(Temporalfcs<10)
        setTemporalfcs(Temporalfcs+1)
    }
    function RemoveNumber(){
        if(Temporalfcs>1)
        setTemporalfcs(Temporalfcs-1)
    }

   /* useEffect(() => {
        AddNumber();

    }, []);*/
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <div className="h-[auto]">
                    <div className="centerxy mt-[15px] "> CODIGOS</div>
                    <div className="flex h-[75%] place-content-evenly">
                      /*  <div className="flex-col centerxy">
                            <img src="https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/es-es/sv5-logo.png" className="w-[150px] mb-[3px] "></img>
                            <p>TEMPORAL FORCES</p>
                            <p>$0.20</p>
                            <div className="flex flex-row">
                                <button className="pr-[5px]">Add to cart</button> <button onClick={AddNumber}>+</button><input type="number" value={Temporalfcs} id="temporalfcs" min="1" max="10" className="w-[50px] text-black"></input><button onClick={RemoveNumber}>-</button>
                            </div>
                        </div>
                        <div className="flex-col centerxy">
                            <img src="https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/es-es/sv5-logo.png" className="w-[150px] mb-[3px]"></img>
                            <p>PALDEAN FATES</p>
                            <div className="flex flex-row">
                                <button className="pr-[5px]">YEP</button><p>$0.20</p>
                            </div>
                        </div>
                        <div className="flex-col centerxy">
                            <img src="https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/es-es/sv5-logo.png" className="w-[150px] mb-[3px]"></img>
                            <p>OBSIDIAN FLAMES</p>
                            <div className="flex flex-row">
                                <button className="pr-[5px]">YEP</button><p>$0.20</p>
                            </div>
                        </div>
                        <div className="flex-col centerxy">
                            <img src="https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/es-es/sv5-logo.png" className="w-[150px] mb-[3px]"></img>
                            <p>PALDEAN FATES ETB</p>
                            <div className="flex flex-row">
                                <button className="pr-[5px]">YEP</button><p>$0.20</p>
                            </div>
                        </div>*/
                    </div>
                    {

                        data.products.map((product)=>(
                            <Product key={product.slug} product={product}/>   
                        ))

                    }
                </div>
            </Body>
            <Footer></Footer>
        </main>
    );
}