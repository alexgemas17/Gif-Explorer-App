import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const HandleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const HandleSubmit = ( e ) => {
        e.preventDefault(); //Para que no refresque la pag al hacerle enter

        // .trim() --> Elimina los espacios del texto
        if( inputValue.trim().length > 2 ){
            setCategories( categories => [inputValue, ...categories] )

            setInputValue( '' )
        }
    }

    return (
        <form onSubmit = { HandleSubmit }>
            <input 
                type ="text"
                value = { inputValue }
                onChange = { HandleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}