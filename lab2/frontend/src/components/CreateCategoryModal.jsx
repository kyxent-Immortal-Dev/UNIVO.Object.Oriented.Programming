import React, { useState } from 'react';
import { createCategory } from '../services/api/category.service';
import useCategory from '../hooks/useCategory';
import Swal from 'sweetalert2';

export default function CreateCategoryModal({ isOpen, onClose, onCategoryCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const { recargueCategories } = useCategory();

  if (!isOpen) return null;

  const handleCreateCategory = async (data) => {
    try {
      await createCategory(data);
      
      Swal.fire({
        title: 'Success!',
        text: 'Category created successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      recargueCategories();
      if (onCategoryCreated) {
        onCategoryCreated();
      }
      onClose();
      setName('');
      setDescription('');
    } catch (error) {
      console.error("Error creating category: ", error);
      
      Swal.fire({
        title: 'Error!',
        text: 'Failed to create category',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
    };
    handleCreateCategory(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Create New Category</h2>
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category name"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category description"
            ></textarea>
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
              className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}