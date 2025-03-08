import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css'; // Ensure you import the CSS

const App = () => {
    return (
        <Router>
            <Navbar />
	    <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
	     </div>
        </Router>
    );
};

export default App;

