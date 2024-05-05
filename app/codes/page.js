"use client"
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";
import { useState, useEffect } from 'react';
import data from "../utils/codigos";
import Product from "../components/product";


export default function CodesPage() {
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <div className="h-[auto]">
                    <div className="centerxy mt-[15px] "> CODIGOS</div>
                    {data.products.map((product) => (
                        <Product key={product.slug} product={product} />
                    ))}
                </div>
            </Body>
            <Footer></Footer>
        </main>
    );
}