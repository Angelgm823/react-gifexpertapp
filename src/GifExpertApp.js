import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrif} from './components/GifGrif'

export const GifExpertApp = () => {
    const [categorias, setCategorias]=useState (['Cats']);

    // const handlaAdd = () =>{
    //     setCategorias ([...categorias, 'El pajaro loco']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            <ol>
                { 
                    categorias.map( category=>(
                         <GifGrif 
                         key = {category}
                         category = {category}
                         />
                    ))
                }
            </ol>
        </>

    )



}