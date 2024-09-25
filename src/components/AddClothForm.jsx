import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios if you haven't already

const AddClothForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    clothImage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/create-cloth`, formData); // Replace with your actual endpoint
      console.log(response.data); // Handle success (e.g., show a message)
      // Reset form
      setFormData({ name: "", category: "", description: "", price: "", clothImage: "" });
    } catch (error) {
      console.error("Error adding cloth:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Cloth</h2>
        <form onSubmit={handleSubmit}>
        
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Cloth Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength="15"
                minLength="3"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter cloth name"
              />
            </div>
            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter category"
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter description"
              />
            </div>
            {/* Price */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>
            {/* Cloth Image URL */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clothImage">
                Cloth Image URL
              </label>
              <input
                type="text"
                id="clothImage"
                name="clothImage"
                value={formData.clothImage}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter cloth image URL"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Cloth
              </button>
            </div>
         
        </form>
      </div>
    </div>
  );
};

export default AddClothForm;
