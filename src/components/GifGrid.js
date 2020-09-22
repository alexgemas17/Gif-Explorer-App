import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category )

    return (
        <>
            <h3> { category } </h3>
            <div className='animate__animated animate__fadeIn card-grid'>
                {
                    data.map(( img ) => (
                        // Con {...img} hacemos que lo que tenga la img se mande como props separadas.
                        <GifGridItem 
                            key={img.id} 
                            { ...img } 
                        /> 
                    ))
                }
            </div>
        </>
    )
}

// Con este hook, definimos que getGifs() solo se ejecute cuando se renderize 
// este componente es renderizado por primera vez a no ser que la categoria cambie.
/* useEffect(() => {
    getGifs( category )
    .then( img => setImages(img) )
}, [category]) */
 