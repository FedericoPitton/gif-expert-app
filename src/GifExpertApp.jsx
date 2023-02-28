
import React from 'react';
import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Apex']);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // setCategories(categories.concat(newCategory)); //Forma mia

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


            {categories.map((category) =>(
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}

        </>
    )
}

export default GifExpertApp
