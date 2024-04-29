import Cardslayout from "./cardslayout";
export async function generateStaticParams() {
    const cards = await fetch(`${process.env.NEXT_PUBLIC_DOMINIO}`+"/cards2.json").then((data) => {return data.json();})

    return cards.data.map((card) => ({
        cardsid: card.id,
    }));
}
export default function Page({ params }) {
    const cardsid = params.cardsid
    console.log(params)
    return (
        <Cardslayout params={params} />
    )
}