import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ total }) => {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Checkout</h2>
            <p className="text-lg">Total: ${total.toFixed(2)}</p>
            <button 
                className="bg-green-500 text-white p-2 w-full mt-4"
                onClick={() => navigate('/checkout')}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Checkout;
