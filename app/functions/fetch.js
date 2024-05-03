export async function fetchJSON(type, search, filter, lit = true) {
    let jsonfile = (type === "set") ? "sets" : "cards";
    const rsp = await fetch(`/${jsonfile}.json`);
    const data = await rsp.json();
    console.log("Se esta buscando un " + type + " donde " + search + " sea el " + filter)
    if (lit) {
        if (typeof search === 'string') {
            return data.data.find(item => item[filter] === search) || null;
        } else if (Array.isArray(search) && search.every(item => typeof item === 'string')) {
            const filteredData = data.data.filter(item => search.includes(item[filter]));
            return filteredData.length > 0 ? filteredData : null;
        }
    }else{
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

}

export function filtrarString(texto) {
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return texto.replace(/[&—: ]/g, "").replace(/_/g, "").toLowerCase();
}