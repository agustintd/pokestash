import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";

export default function codes({ children }) {
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <CardGroup>
                <p> CODIGOS </p>    
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}