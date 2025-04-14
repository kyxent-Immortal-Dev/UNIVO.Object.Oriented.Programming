import { apiClient } from "../apiClient";

export const getAllMovies = async (id) => {
    try {
        const response = await apiClient(`/series/${id}`);
        return response.data.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const getMovieById = async (id) => {
    try {
        const response = await apiClient(`/series/detail/${id}`);
        return response.data.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const createMovie = async (movieData) => {
    try {
        const response = await apiClient.post('/series', movieData);
        return response.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const updateMovie = async (id, movieData) => {
    try {
        const response = await apiClient.put(`/series/${id}`, movieData);
        return response.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const updateMovieTitle = async (id, title) => {
    try {
        const response = await apiClient.patch(`/series/${id}/title`, { title });
        return response.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const deleteMovie = async (id) => {
    try {
        const response = await apiClient.delete(`/series/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`${error}`);
    }
};