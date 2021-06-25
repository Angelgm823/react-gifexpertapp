import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrifItem } from './GifGrifItem';

export const GifGrif = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    console.log(loading);
   
    

    


return(
    <>
    <h3 className='animate__animated animate__backInLeft'>{category}</h3>
    {loading && <p>Loading</p>}

<div className="card-grid">
    {
        images.map(img =>(
            <GifGrifItem 
            key={img.id}
            {...img}
            />
        ))
    }

</div>
    </>
    )
}