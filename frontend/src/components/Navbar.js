import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Food Ordering</h1>
            <div>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/shop" className="mr-4">Shop</Link>
                <Link to="/cart" className="mr-4">Cart</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
