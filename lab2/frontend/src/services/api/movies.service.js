import { apiClient } from "../apiClient";



export const getAllMovies = async (id) => {
    
    try {

        const response = await apiClient(`/series/${id}`)

        return response.data.data
        
    } catch (error) {
        throw new Error(`${error}`);
        
    }

}