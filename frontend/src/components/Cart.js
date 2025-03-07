import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="p-2 border-b flex justify-between">
                        {item.name} - ${item.price} x {item.quantity}
                        <button 
                            className="bg-red-500 text-white px-3 py-1 ml-4"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
