
import React from 'react';
import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Apex', 'segundo']);


    const onAddCategory = () =>{
        
        setCategories(categories.concat('element'));

       
    }

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory/>
      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
            return <li key={category}>{category}</li>
        })}
      </ol>
        {/* Gif Item */}
    </>
  )
}

export default GifExpertApp
