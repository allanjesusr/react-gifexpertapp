import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState(''); //Dejarlo vacio marca undefined

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); // para poder escribir en la caja
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevenir el comportamiento por defecto 

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

        // console.log('submit hecho');

    }

    return (
        <form onSubmit={ handleSubmit }>
            {/*<h1> { inputValue} </h1>  {/*Se Renderiza arriba de la caja de text */}
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}