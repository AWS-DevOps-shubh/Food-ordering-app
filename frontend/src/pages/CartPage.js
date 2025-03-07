import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Pizza", price: 12.99, quantity: 1 },
        { id: 2, name: "Burger", price: 8.99, quantity: 2 }
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const proceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <h2 className="text-xl font-bold">Your Cart</h2>
                {cartItems.length > 0 ? (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="p-2 border-b flex justify-between">
                                    {item.name} - ${item.price} x {item.quantity}
                                    <button className="text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <button 
                            className="mt-4 bg-green-500 text-white p-2"
                            onClick={proceedToCheckout}>
                            Proceed to Checkout
                        </button>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default CartPage;
