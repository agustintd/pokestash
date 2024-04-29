import Link from "next/link";
export default function Sets({setdata}){
    const id = setdata.name.replace(/ /g, "").replace(/:/g, "").toLowerCase();
    return(
        <div className='set-container'>
        <Link href={`/sets/${id}`}><img  src={setdata.images.logo} id="img1" className='h-[85px] w-[175px]  text-white'></img></Link>
        <div className='topDiplay centerxy'>
            <h1 className=''>{setdata.name}</h1>
        </div>
        <div className='bottom-diplay centerxy'>
            <span className='set-date'> Release {setdata.releaseDate}</span>
        </div>
    </div>
    )
}