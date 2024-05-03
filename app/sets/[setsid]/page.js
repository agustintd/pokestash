import Setslayout from "./setslayout";
import { filtrarString } from "@/app/functions/fetch";

export async function generateStaticParams() {
    const sets = await fetch(`${process.env.NEXT_PUBLIC_DOMINIO}`+"/sets.json").then((data) => {return data.json();})

    return sets.data.map((set) => ({
        setsid: filtrarString(set.name),
    }));
}



export default function Page({ params }) {
    const setsid = params.setsid
    console.log(params)
    return (
            
        <Setslayout params={params} />
    )
}



// agregar en 404 funcion que tome urlprevia la revise si esta en lowercase y si no que la redirija a la pag con lowercase