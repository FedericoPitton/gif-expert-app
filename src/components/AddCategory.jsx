import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = () => {
        event.preventDefault();// evitamos que cargue la pagina nuevamente
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
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
