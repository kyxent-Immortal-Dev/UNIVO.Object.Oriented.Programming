import { apiClient } from "../apiClient";

export const getAllCategories = async () => {
  try {
    const response = await apiClient.get("/category");
    return await response.data.data;

  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching categories");
  }
};


export const createCategory = async (data) => {
    
    try {
        
        const response = await apiClient.post('/category', data)

        return response.data

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}