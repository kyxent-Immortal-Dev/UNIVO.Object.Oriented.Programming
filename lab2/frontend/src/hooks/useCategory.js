


import React, { useCallback, useEffect, useState } from 'react'
import { getAllCategories } from '../services/api/category.service';

export default function useCategory() {

        const [categories , setCategories] = useState([]);
   
        
          console.log(categories);
          
        
          useEffect(() => {
            
            const getCategories = async() => {
        
              try {
                
                const data = await getAllCategories()
        
                setCategories(data)
        
              } catch (error) {
                throw new Error(`${error}`);
                
              }
        
            }
        
            getCategories()
        
          }, [])


          const recargueCategories = useCallback(() => {
            
            const getCategories = async() => {
        
                try {
                  
                  const data = await getAllCategories()
          
                  setCategories(data)
          
                } catch (error) {
                  throw new Error(`${error}`);
                  
                }
          
              }
          
              getCategories()
          },[])

  return {
    categories,
    recargueCategories
  }

}