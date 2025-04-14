import React, { useState } from 'react';
import { updateMovieTitle } from '../services/api/movies.service';
import Swal from 'sweetalert2';

export default function QuickEditTitleModal({ isOpen, onClose, movie, onMovieUpdated }) {
  const [title, setTitle] = useState(movie?.title || '');

  if (!isOpen || !movie) return null;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await updateMovieTitle(movie._id, title);
      
      Swal.fire({
        title: 'Success!',
        text: 'Movie title updated successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      onMovieUpdated();
      onClose();
    } catch (error) {
      console.error("Error updating movie title:", error);
      
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update movie title',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Quick Edit: Movie Title</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 border border-transparent rounded-md text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Update Title
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}