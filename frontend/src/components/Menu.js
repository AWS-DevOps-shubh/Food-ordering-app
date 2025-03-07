import React from 'react';

const Menu = ({ items, addToCart }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="p-2 border-b flex justify-between">
                        {item.name} - ${item.price}
                        <button 
                            className="bg-blue-500 text-white px-3 py-1 ml-4"
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
