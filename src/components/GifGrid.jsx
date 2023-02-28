import React, { useEffect, useState } from 'react'

import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando...</h2>)}
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} //enviamos todos los atributos desestructurados      
                        />
                    ))
                }
            </div>
        </>
    )
}