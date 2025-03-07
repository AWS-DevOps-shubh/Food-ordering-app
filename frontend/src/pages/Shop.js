import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Shop = () => {
    const [items] = useState([
        { id: 1, name: "Pizza", price: 12.99 },
        { id: 2, name: "Burger", price: 8.99 },
        { id: 3, name: "Pasta", price: 10.99 }
    ]);

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <h2 className="text-xl font-bold">Shop</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="p-2 border-b">
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Shop;
