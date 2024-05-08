"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { useState, useEffect, useContext } from 'react';
import data from "../utils/codigos";
import Product from "../components/product";
import { CartContext } from "../context/ShoppingCartContext";

export default function CodesPage() {
    const [cart, setCart] = useContext(CartContext)
    return (
        <main className="flex min-h-screen  flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <div className="h-[700px]">
                    <div className="centerxy mt-[15px] "><h1>CODES</h1></div>
                    <div className="centerxy"><h2>prices are in ARS currency</h2></div>
                    <div className="flex flex-row place-content-evenly h-[75%]">
                        {data.products.map((product, index) => (
                            <Product key={product.slug} product={product} />
                        ))}
                    </div>

                    <div className="">
                        
                            {
                                cart.map((elemento, index) => (
                                    <div className="w-[auto] flex space-x-4">
                                    <p  className="" key={index}>{elemento[0]}</p>
                                    <p >{elemento[1]}</p>
                                    <p >${parseFloat(elemento[2]).toFixed(2)}</p>
                                    </div>
                                ))
                            }
                        
                    </div>
                </div>
            </Body>
            <Footer></Footer>
        </main>
    );
}