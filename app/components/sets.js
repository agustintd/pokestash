import Link from "next/link";
import { filtrarString } from "@/app/functions/fetch";
export default function Sets({setdata}){
    const id2 = filtrarString(setdata.name);

    return(
        <div className='set-container'>
        <Link href={`/sets/${id2}`} ><img  src={setdata.images.logo} id="img1" className='h-[85px] w-[175px]  text-white'></img></Link>
        <div className='topDiplay centerxy'>
            <h1 className=''>{setdata.name}</h1>
        </div>
        <div className='bottom-diplay centerxy'>
            <span className='set-date'> Release {setdata.releaseDate}</span>
        </div>
    </div>
    )
}