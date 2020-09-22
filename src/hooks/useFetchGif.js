// los hooks empiezan con use....

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

// Este hook tiene estado y dirá a los componentes que lo usen, si algo cambió y deben renderizarse
export const useFetchGifs = ( category ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Con este hook, definimos que getGifs() solo se ejecute cuando se renderize 
    // este componente es renderizado por primera vez a no ser que la categoria cambie.
    useEffect(() => {
        //Aquí es donde haremos la peticion http.
        
        getGifs(category)
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })

    }, [category])

    return state; // --> { data: [], loading: true}
}