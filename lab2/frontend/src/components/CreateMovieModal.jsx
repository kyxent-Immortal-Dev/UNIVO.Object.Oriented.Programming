import React, { useState } from 'react';
import { createMovie } from '../services/api/movies.service';
import Swal from 'sweetalert2';

export default function CreateMovieModal({ isOpen, onClose, categoryId, onMovieCreated }) {
  const initialFormState = {
    title: '',
    description: '',
    year: '',
    image: '',
    category: categoryId,
    clasificacion: 'PG-13',
    formato: 'Digital',
    duracion: '',
    fecha_ingreso: new Date().toISOString().split('T')[0]
  };
  
  const [formData, setFormData] = useState(initialFormState);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      const movieData = {
        ...formData,
        year: new Date(formData.year),
        duracion: Number(formData.duracion),
        category: categoryId
      };
      
      await createMovie(movieData);
      
      onMovieCreated();
      setFormData(initialFormState);
      onClose();
    } catch (error) {
      console.error("Error creating movie:", error);
      
      Swal.fire({
        title: 'Error!',
        text: 'Failed to create movie',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Add New Movie</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Release Date</label>
              <input
                type="date"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="duracion" className="block text-sm font-medium text-gray-700 mb-1">Duration (min)</label>
              <input
                type="number"
                id="duracion"
                name="duracion"
                value={formData.duracion}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="clasificacion" className="block text-sm font-medium text-gray-700 mb-1">Classification</label>
              <select
                id="clasificacion"
                name="clasificacion"
                value={formData.clasificacion}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="formato" className="block text-sm font-medium text-gray-700 mb-1">Format</label>
              <select
                id="formato"
                name="formato"
                value={formData.formato}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="DVD">DVD</option>
                <option value="Blu-ray">Blu-ray</option>
                <option value="Digital">Digital</option>
                <option value="4K">4K</option>
                <option value="VHS">VHS</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 border border-transparent rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}