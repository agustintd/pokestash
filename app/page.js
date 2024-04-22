import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";

export default function Home({ children }) {
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  bg-gray-300 ">
            <Nav></Nav>
            <Body>{children}</Body>
            <Footer></Footer>
        </main>
    );
}