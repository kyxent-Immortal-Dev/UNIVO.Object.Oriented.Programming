import React, { useState } from 'react'
import { getAllMovies } from '../services/api/movies.service';
import useCategory from '../hooks/useCategory';

export default function SidebarComponent() {

    const [movies , setMovies] = useState([]);



    const {categories} = useCategory()

      
          console.log(movies);
          
      
          const handleMovies = (id) => {
            
            try {

               
                const getMovies = async () => {
                    try {
                        
                        const response = await getAllMovies(id)

                        setMovies(response)

                    } catch (error) {
                        throw new Error(`${error}`);
                        
                    }
                }

                getMovies()
                
                
            } catch (error) {
                throw new Error(`${error}`);
                
            }
            
          }


  return (
    <>
    
    <div className='container-main'>
    <div className='Sidebar'>
    <ul>
      {categories.map((category) => (
        <li key={category._id} value={category._id} onClick={()=> {handleMovies(category._id)
        }}>{category.name}</li>
      ))}
    </ul>
    </div>

    <div className='movie-list'>
            {movies.map((movie) => (
        <ul key={movie._id}>

                <li >{movie.title}</li>
                <li ><img src={movie.image} alt={movie.title} height={100}/></li>
                
        </ul>
            ) )}
    </div>
    </div>

    </>
  )
}
