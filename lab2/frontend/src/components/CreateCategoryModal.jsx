import React, { useState } from 'react';
import { createCategory } from '../services/api/category.service';
import useCategory from '../hooks/useCategory';

export default function CreateCategoryModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const { recargueCategories } = useCategory();

  const handleCreateCategory = async (data) => {
    try {
      await createCategory(data);
      recargueCategories();
    } catch (error) {
      console.error("Error creating category: ", error);
      throw new Error(`${error}`);
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
    <>
      <div>
        <h3>Modal for Create Category</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              type="text"
              placeholder="Insert name category"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Insert description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
