export default function Card(cardinfo) {
    return (
        <div className='card-container'>
            <div className='h-[300px] w-[200px] bg-black text-white'>card img</div>
            <div className='topDiplay'>
                <h1 className=''>card name</h1>
            </div>
            <div className='bottomDiplay'>
                <span className='cardNumber'>5</span>
                <span className='cardPrice'>$10</span>
            </div>
        </div>
    );
}