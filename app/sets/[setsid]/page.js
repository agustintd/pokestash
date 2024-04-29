import Setslayout from "./setslayout";
export async function generateStaticParams() {
    const sets = await fetch(`${process.env.NEXT_PUBLIC_DOMINIO}`+"/sets.json").then((data) => {return data.json();})

    return sets.data.map((set) => ({
        setsid: set.name.replace(/ /g, "").replace(/:/g, "").toLowerCase(),
    }));
}

export default function Page({ params }) {
    const setsid = params.setsid
    console.log(params)
    return (
        <Setslayout params={params} />
    )
}