//Los helpers son funciones que hacen un trabajo específicio, lo procesan, y luego lo devuelven.

// Devuelve una promesa!!
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=WZmmVEW3O4lcb5k1QjTf7hdJg79Zs3zu`

    const resp = await fetch( url )
    const { data } = await resp.json()

    console.log(data)

    return data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}

//const data = fetch( url )
//.then((response) => response.json())
//.then((data) => data)