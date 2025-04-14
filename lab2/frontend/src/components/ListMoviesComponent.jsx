import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAllMovies } from '../services/api/movies.service';

export default function ListMoviesComponent() {

    const [movies , setMovies] = useState([]);

    console.log(movies);
    

    useEffect( ()=> {

        const getAll = async () => {

            try {
                
                const response = await getAllMovies()

                setMovies(response)

            } catch (error) {
                throw new Error(`${error}`);
                
            }

        }

        getAll()


    },[])

  return (
    <>
    
    

    </>
  )
}
