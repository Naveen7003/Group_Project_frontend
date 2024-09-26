import React, { useEffect, useState } from 'react';
import axios from '../utils/Axios'; // Adjust the import based on your project structure

const AdminProducts = () => {
    const [products, setProducts] = useState([]); // State to hold product data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error messages

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products'); // Adjust the endpoint as needed
            setProducts(response.data);
        } catch (error) {
            console.error("Could not fetch products:", error);
            setError("Could not fetch products. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>; // Loading state

    if (error) return <div className="text-red-500">{error}</div>; // Error state

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border rounded shadow-md p-4">
                        <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProducts;
