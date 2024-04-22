

export default function Nav() { 
    return (
        <div className="w-[100%] h-[70px] bg-stone-600 centerxy mr-auto ml-auto"> 
            <div id="desktop-nav" className="w-[50%] h-[75%] min-w-[500px] max-w-[1500px] centerxy gap-20">
                <div className=""> <p> Logo</p> </div>
                <div className=""> <p> Sets </p></div>
                <div className=""> <p> Cards </p></div>
                <div className=""> <p> Busqueda </p></div>
            </div>
        </div>
    );  
}