import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        address: '',
        paymentMethod: 'Credit Card',
    });

    const [cartItems] = useState([
        { id: 1, name: "Pizza", price: 12.99, quantity: 1 },
        { id: 2, name: "Burger", price: 8.99, quantity: 2 }
    ]);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    const placeOrder = () => {
        alert(`Order placed successfully for ${orderDetails.name}`);
        navigate('/orders');
    };

    return (
        <div>
            <Navbar />
            <div className="p-6 max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-4">Checkout</h2>

                <div className="mb-4">
                    <label className="block font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={orderDetails.name} 
                        onChange={handleChange} 
                        className="border p-2 w-full" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={orderDetails.address} 
                        onChange={handleChange} 
                        className="border p-2 w-full" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Payment Method</label>
                    <select 
                        name="paymentMethod" 
                        value={orderDetails.paymentMethod} 
                        onChange={handleChange} 
                        className="border p-2 w-full"
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                </div>

                <h3 className="text-lg font-semibold mt-4">Order Summary</h3>
                <ul className="mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="p-2 border-b flex justify-between">
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</h3>

                <button 
                    className="mt-4 bg-green-500 text-white p-2 w-full"
                    onClick={placeOrder}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
