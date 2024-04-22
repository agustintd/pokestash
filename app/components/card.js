"use client"
import { useState, useEffect } from 'react';
export default function Card() {
    const [cardinfo, setCardinfo] = useState(["none","none","none", "none"]);
    const pokeids = ["dp3-1", "ex12-1", "mcd19-1", "ex7-1", "sm9-1", "pl1-2", "ex3-2", "sm9-2", "mcd19-2", "xy5-2", "sm12-1", "si1-1", "sm3-1", "pop7-1", "bw1-2", "base4-3", "hgss4-3", "ex7-3", "swsh35-2", "xy2-3", "sm9-3", "sm1-2", "mcd19-3", "dp3-3", "base1-1", "ex8-1", "pop5-1", "xy10-1", "ecard2-H1", "base4-1", "ex11-1", "base3-2", "gym1-2", "ex14-1", "sm115-1", "col1-1", "ex9-1", "bw10-1", "ex9-2", "ru1-3", "xy5-3", "pl3-3", "xy7-2", "bw10-2", "ex12-3", "xy11-2", "ex3-3", "dv1-3", "xy4-1", "bw4-1", "bw7-1", "sm5-1", "sm8-1", "hgss4-1", "xy5-1", "pl1-1", "det1-1", "dv1-1", "pl3-1", "xy2-1", "pop6-1", "ecard2-H2", "hgss4-2", "pl3-2", "ex11-2", "pop6-2", "base4-2", "ex12-2", "ex7-2", "xy11-1", "bw1-1", "gym2-1", "swsh35-1", "sm1-1", "ex13-1", "pop6-3", "ex11-3", "ex13-2", "gym2-2", "det1-3", "pop7-2", "col1-2", "pl1-3", "sm115-2", "sm2-1", "ex4-1", "bw9-1", "ex3-1", "ru1-1", "hgss1-1", "gym1-1", "base3-1", "dp3-2", "xy2-2", "hgss1-2", "det1-2", "ru1-2", "dp1-1", "xy7-1", "dv1-2", "ecard2-H3", "sm12-2", "si1-2", "base3-3", "hgss1-3", "gym1-3", "base5-1", "bw11-1", "pop3-1", "dp4-1", "bw5-1", "dpp-DP01", "swsh1-1", "base6-1", "pop9-1", "mcd19-4", "sm115-3", "base3-4", "det1-4", "pop4-2", "ex12-4", "ex3-4", "xy2-4", "ex11-4", "gym2-3", "pop1-2", "pl4-2", "sm3-2", "bw10-3", "hgss4-4", "ex13-3", "bw6-1", "xy11-4", "hgss4-5", "sm5-3", "pl3-4", "swsh4-2", "gym2-4", "pop3-3", "base6-3", "bw4-3", "hgss2-2", "swsh4-1", "pop1-1", "bw8-1", "neo4-1", "pop7-3", "hgss1-4", "xy1-2", "ex8-2", "dpp-DP02", "col1-3", "bw11-2", "ecard2-H4", "neo4-2", "base6-2", "si1-3", "base4-4", "bw8-2", "xy7-3", "sm75-1", "ex7-4", "swsh1-3", "xy5-4", "ex11-5", "base3-5", "ex10-2", "xy7-4", "pl1-5", "basep-2", "hgss2-1", "basep-1", "pop4-1", "pl4-1", "ex9-3", "pop6-4", "ex4-2", "xy4-2", "pl1-4", "swsh35-3", "base5-2", "pop5-2", "dp4-2", "pop3-2", "pop9-2", "sm5-2", "bw5-3", "ex12-5", "pl4-3", "bw10-4", "pop4-3", "ex9-4", "dp4-3", "ecard2-H5", "pop1-3", "xy4-3", "bw11-3", "pop7-4", "xy1-1", "neo3-1", "bw5-2", "sm2-2", "bw7-2", "dv1-4", "dp1-2", "dp3-4", "xy11-3", "swsh1-2", "bw4-2", "sm9-4", "ex10-1", "si1-4", "dp1-3", "sm12-3", "hgss1-5", "ex3-5", "ex4-3", "dv1-5", "dp3-5", "bw1-3", "ex8-3", "neo3-2", "neo4-3", "bw7-3", "dpp-DP03", "sm115-4", "xy2-5", "ex14-2", "det1-5", "pl1-6", "dpp-DP04", "xy5-5", "xy2-6", "ex14-3", "base5-3", "neo4-4", "hgss4-6", "bw8-3", "sm75-3", "xy11-5", "det1-6", "bw9-2", "pop3-4", "bw4-4", "hgss1-6", "sm12-4", "xy5-6", "mcd19-7", "gym2-5", "base4-5"];
    const randomIndex = Math.floor(Math.random() * pokeids.length);
    const randomId = pokeids[randomIndex]; 
    function getRandomCardData() {
        fetch("http://localhost:3000/cards.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                let card = data.data.find(data => data.id === randomId)
                if (!card) {
                    console.log(null);
                }
                const { name, images, cardmarket } = card;
                const averageSellPrice = cardmarket?.prices?.trendPrice || "???";
                const { small } = images;
                setCardinfo([name, small, averageSellPrice, randomId]);
                return "a   ";
            })
    }
    
    const cardBg = {
        backgroundImage: `url(${cardinfo[1]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    useEffect(() => {
        getRandomCardData()
    }, []);
    return (
        <div className='card-container'>
            <div style={cardBg} id="img1" className='h-[300px] w-[200px] bg-black text-white'></div>
            <div className='topDiplay'>
                <h1 className=''>{cardinfo[0]}</h1>
            </div>
            <div className='bottom-diplay'>
                <span className='cardNumber'>{cardinfo[3]}</span>
                <span className='cardPrice'> ${cardinfo[2]}</span>
            </div>
        </div>
    );
}