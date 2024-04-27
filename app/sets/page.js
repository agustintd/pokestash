import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import CardGroup from "@/app/components/cardgroup";
import Sets from "@/app/components/sets";

export default function Home({ children }) {
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
            <Nav></Nav>
            <Body>
                <CardGroup>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                    <Sets></Sets>
                </CardGroup>
            </Body>
            <Footer></Footer>
        </main>
    );
}