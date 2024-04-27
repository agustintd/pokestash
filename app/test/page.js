import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import CardImg from "@/app/components/cardImg";

export default function Home({ children }) {
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor">
            <Nav></Nav>
            <Body>
                <CardGroup>
                    <CardImg></CardImg>
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}