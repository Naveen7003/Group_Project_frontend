import React, { useEffect, useState } from 'react';
// import axios from '../utils/Axios'; // Uncomment when using actual API

const AdminProducts = () => {
    const [products, setProducts] = useState([]); // State to hold product data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error messages
    const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the clicked product for update/delete
    const [isEditing, setIsEditing] = useState(false); // To toggle between view and edit mode

    const fetchProducts = async () => {
       
    //     try {
    //         const response = await axios.get('/products'); // Adjust the endpoint as needed
    //         setProducts(response.data);
    //     } catch (error) {
    //         console.error("Could not fetch products:", error);
    //         setError("Could not fetch products. Please try again later.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };


        // Mock data for testing
        const mockData = [
            {
                id: 1,
                name: "T-Shirt",
                description: "A comfortable cotton t-shirt",
                price: 19.99,
                imageUrl: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                name: "Jeans",
                description: "Stylish denim jeans",
                price: 49.99,
                imageUrl: "https://via.placeholder.com/150"
            },
            {
                id: 3,
                name: "Sneakers",
                description: "Casual sneakers for everyday use",
                price: 69.99,
                imageUrl: "https://via.placeholder.com/150"
            }
        ];

        setProducts(mockData); // Set mock data
        setLoading(false); // Set loading to false
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCardClick = (product) => {
        setSelectedProduct(product); // Set the clicked product
        setIsEditing(false); // Start in view mode
    };

    const handleUpdate = () => {
        alert(`Update product: ${selectedProduct.name}`);
        // Implement the update logic here (e.g., send data to API)
        setSelectedProduct(null); // Close modal after update
    };

    const handleDelete = () => {
        alert(`Delete product: ${selectedProduct.name}`);
        // Implement the delete logic here
        setSelectedProduct(null); // Close modal after delete
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    if (loading) return <div>Loading...</div>; // Loading state

    if (error) return <div className="text-red-500">{error}</div>; // Error state

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div 
                        key={product.id} 
                        className="border rounded shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300" 
                        onClick={() => handleCardClick(product)} // Make card clickable
                    >
                        <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">
                            {isEditing ? 'Edit Product' : 'Product Details'}
                        </h2>

                        <div className="mb-4">
                            <label className="block text-gray-700">Product Name</label>
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={selectedProduct.name} 
                                    onChange={handleInputChange} 
                                    className="border p-2 w-full"
                                />
                            ) : (
                                <p>{selectedProduct.name}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            {isEditing ? (
                                <textarea
                                    name="description"
                                    value={selectedProduct.description}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full"
                                />
                            ) : (
                                <p>{selectedProduct.description}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Price</label>
                            {isEditing ? (
                                <input
                                    type="number"
                                    name="price"
                                    value={selectedProduct.price}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full"
                                />
                            ) : (
                                <p>${selectedProduct.price}</p>
                            )}
                        </div>

                        <div className="flex space-x-4">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleUpdate}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>

                        <button 
                            onClick={() => setSelectedProduct(null)} 
                            className="mt-4 text-gray-700 underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
