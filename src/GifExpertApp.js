/* rafcp */
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const  [categories, setCategories ] = useState(['Kimetsu no yaiba']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( 
                        (value, index) => <GifGrid key={ value } category={ value } />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
