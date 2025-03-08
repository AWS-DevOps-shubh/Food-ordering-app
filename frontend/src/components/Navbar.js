import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Food Ordering</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

