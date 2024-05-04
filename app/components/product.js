
import { filtrarString } from "@/app/functions/fetch";
export default function Product({product}){


    return(
    <div id={product.slug} className="flex-col centerxy">
        <img src={product.image} className="w-[150px] mb-[3px] "></img>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <div className="flex flex-row">
                <button className="pr-[5px]">Add to cart</button> <button onClick="">+</button><input type="number" value="1" min="1" max="10" className="w-[50px] text-black"></input><button onClick="">-</button>
            </div>
    </div>
    )
}