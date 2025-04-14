import React, { useState, useEffect } from 'react';
import { getAllMovies } from '../services/api/movies.service';
import useCategory from '../hooks/useCategory';
import MovieCard from './MovieCard';
import CreateMovieModal from './CreateMovieModal';
import EditMovieModal from './EditMovieModal';
import QuickEditTitleModal from './QuickEditTitleModal';
import CreateCategoryModal from './CreateCategoryModal';
import Swal from 'sweetalert2';

export default function SidebarComponent() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCreateMovieModalOpen, setIsCreateMovieModalOpen] = useState(false);
  const [isEditMovieModalOpen, setIsEditMovieModalOpen] = useState(false);
  const [isQuickEditModalOpen, setIsQuickEditModalOpen] = useState(false);
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { categories, recargueCategories } = useCategory();

  useEffect(() => {
    if (selectedCategory) {
      fetchMovies(selectedCategory._id);
    }
  }, [selectedCategory]);


  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const fetchMovies = async (categoryId) => {
    try {
      const response = await getAllMovies(categoryId);
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movies:", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to load movies',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMovieDeleted = (movieId) => {

    setMovies(movies.filter(movie => movie._id !== movieId));
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Movie deleted successfully',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleMovieCreated = () => {
    if (selectedCategory) {
      fetchMovies(selectedCategory._id);
    }
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Movie created successfully',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleMovieUpdated = () => {
    if (selectedCategory) {
      fetchMovies(selectedCategory._id);
    }
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Movie updated successfully',
      showConfirmButton: false,
      timer: 1500
    });
  };
  
  const handleCategoryCreated = () => {
    recargueCategories();
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Category created successfully',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const openEditModal = (movie) => {
    setSelectedMovie(movie);
    setIsEditMovieModalOpen(true);
  };

  const openQuickEditModal = (movie) => {
    setSelectedMovie(movie);
    setIsQuickEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Movie Categories</h1>
          <button 
            onClick={() => setIsCreateCategoryModalOpen(true)}
            className="px-4 py-2 bg-white text-indigo-600 rounded-md hover:bg-gray-100 transition-colors font-medium flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Category
          </button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-800 text-white">
              <h2 className="text-lg font-semibold">Categories</h2>
            </div>
            
            <div className="p-2">
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category._id}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedCategory && selectedCategory._id === category._id
                          ? 'bg-indigo-100 text-indigo-700 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
                
                {categories.length === 0 && (
                  <li className="text-gray-500 text-sm px-4 py-2">
                    No categories available
                  </li>
                )}
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {selectedCategory ? (
              <>
                <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{selectedCategory.name}</h2>
                    <p className="text-gray-600 text-sm">{selectedCategory.description}</p>
                  </div>
                  <button 
                    onClick={() => setIsCreateMovieModalOpen(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Movie
                  </button>
                </div>
                
                {movies.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((movie) => (
                      <MovieCard 
                        key={movie._id} 
                        movie={movie} 
                        onDelete={handleMovieDeleted}
                        onEdit={openEditModal}
                        onQuickEdit={openQuickEditModal}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No movies found</h3>
                    <p className="text-gray-500 mb-6">This category doesn't have any movies yet.</p>
                    <button 
                      onClick={() => setIsCreateMovieModalOpen(true)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add First Movie
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a category</h3>
                <p className="text-gray-500">Choose a category from the sidebar to view movies</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modals */}
      {isCreateMovieModalOpen && (
        <CreateMovieModal 
          isOpen={isCreateMovieModalOpen}
          onClose={() => setIsCreateMovieModalOpen(false)}
          categoryId={selectedCategory?._id}
          onMovieCreated={handleMovieCreated}
        />
      )}
      
      {isEditMovieModalOpen && (
        <EditMovieModal 
          isOpen={isEditMovieModalOpen}
          onClose={() => setIsEditMovieModalOpen(false)}
          movie={selectedMovie}
          onMovieUpdated={handleMovieUpdated}
        />
      )}
      
      {isQuickEditModalOpen && (
        <QuickEditTitleModal 
          isOpen={isQuickEditModalOpen}
          onClose={() => setIsQuickEditModalOpen(false)}
          movie={selectedMovie}
          onMovieUpdated={handleMovieUpdated}
        />
      )}
      
      {isCreateCategoryModalOpen && (
        <CreateCategoryModal 
          isOpen={isCreateCategoryModalOpen}
          onClose={() => setIsCreateCategoryModalOpen(false)}
          onCategoryCreated={handleCategoryCreated}
        />
      )}
    </div>
  );
}