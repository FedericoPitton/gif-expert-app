import React, { useState } from 'react';

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = () => {
        event.preventDefault();// evitamos que cargue la pagina nuevamente
    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type='text'
                placeholder='Buscar GIFs'
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
    )
}

export default AddCategory
