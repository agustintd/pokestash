async function EzFetch(type, id, filter) {
    const id = id, filter = filter, type = type;
    const url = `${process.env.NEXT_PUBLIC_API_URL}`;
    const key = `${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
        const response = await fetch(url+type+"/"+id, {
            method: 'GET',
            body: formData,
        }); 
        const data = await response.json();
        if (response.ok) { 

        }
        console.log(data)
    } catch (error) {

    } finally {
    }
}
