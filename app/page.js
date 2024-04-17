import CardGroup from "@/app/components/cardgroup";
import Card from "@/app/components/card";

export default function Home() { 
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  bg-gray-300 ">
            <CardGroup>
              <Card/>
              <Card/>
              <Card/>
            </CardGroup>
        </main>
    );
}