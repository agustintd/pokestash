export async function fetchJSON(type, search, filter, lit = true) {
    let jsonfile = (type === "set") ? "sets" : "cards";
    const rsp = await fetch(`/${jsonfile}.json`);
    const data = await rsp.json();
    //console.log("Se esta buscando un " + type + " donde " + search + " sea el " + filter)
    if (lit === true) {
        if (typeof search === 'string') {
            return data.data.find(item => item[filter] === search) || null;
        } else if (Array.isArray(search) && search.every(item => typeof item === 'string')) {
            const filteredData = data.data.filter(item => search.includes(item[filter]));
            return filteredData.length > 0 ? filteredData : null;
        }
    }
    if (lit === false) {
        if (typeof search === 'string') {
            return data.data.find(item => filtrarString(item[filter]) === filtrarString(search)) || null;
        } else if (Array.isArray(search) && search.every(item => typeof item === 'string')) {
            const filteredData = data.data.filter(item => {
                const transformedItem = filtrarString(item[filter]);
                return search.includes(transformedItem);
            });
            return filteredData.length > 0 ? filteredData : null;
        }
    }
    if(lit === "setcards"){
        return data.data.filter(item => item[filter].includes(search + "-")) || null;
    }
    return []
    
}

export function filtrarString(texto) {
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return texto.replace(/[&—: ]/g, "").replace(/_/g, "").toLowerCase();
}

export function crearArrayAleatorio(array, cantidad) {
    if (cantidad > array.length) {
        throw new Error("La cantidad de elementos solicitada es mayor que la longitud del array.");
    }
    let newArray = [];
    let indicesUtilizados = [];
    for (let i = 0; i < cantidad; i++) {
        let indiceAleatorio = Math.floor(Math.random() * array.length);
        while (indicesUtilizados.includes(indiceAleatorio)) {
            indiceAleatorio = Math.floor(Math.random() * array.length);
        }
        newArray.push(array[indiceAleatorio]);
        indicesUtilizados.push(indiceAleatorio);
    }
    return newArray;
}

export function crearArrayVacio(cantidad) {
    if (cantidad <= 1) {
        return [["", "", "", ""]];
    }
    const arrays = [];
    for (let i = 0; i < cantidad; i++) {
        arrays.push(["", "", "", ""]);
    }
    return arrays;
}


