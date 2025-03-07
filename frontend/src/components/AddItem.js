import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [item, setItem] = useState({ name: '', price: '' });

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...item, price: parseFloat(item.price) });
        setItem({ name: '', price: '' });
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" name="name" placeholder="Item Name"
                    value={item.name} onChange={handleChange}
                    className="border p-2 w-full mb-2"
                />
                <input 
                    type="number" name="price" placeholder="Price"
                    value={item.price} onChange={handleChange}
                    className="border p-2 w-full mb-2"
                />
                <button className="bg-green-500 text-white p-2 w-full">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
