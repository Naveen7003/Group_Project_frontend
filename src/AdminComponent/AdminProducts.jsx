import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/Actions/productActions'; // Adjust the import if necessary

const AdminProducts = () => {
    const dispatch = useDispatch();
    const { product, isAuth } = useSelector(state => state.product); // Correct path to access products
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsEditing(false);
    };

    const handleUpdate = () => {
        alert(`Update product: ${selectedProduct.name}`);
        setSelectedProduct(null);
    };

    const handleDelete = () => {
        alert(`Delete product: ${selectedProduct.name}`);
        setSelectedProduct(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    if (!product.length) return <div>No products available.</div>; // Check for product length

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.map(prod => ( // Use 'product' here
                    <div 
                        key={prod.id} 
                        className="border rounded shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300" 
                        onClick={() => handleCardClick(product)} // Use 'prod' here
                    >
                        <img src={prod.clothImage} alt="" />
                        {/* <img src={prod.clothImage} alt={prod.name} className="w-full h-32 object-cover" /> */}
                        <h2 className="font-semibold">{prod.name}</h2>
                        <h2 className="font-semibold">{prod.category}</h2>
                        <h2 className="font-semibold">{prod.description}</h2>
                        <h2 className="font-semibold">{prod.price}</h2>



                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProducts;
