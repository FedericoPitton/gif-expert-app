import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then((newImages) => setimages(newImages))
            .then(setisLoading(false))
    }, [])

    return {
        images:images,
        isLoading: isLoading

    }
}
