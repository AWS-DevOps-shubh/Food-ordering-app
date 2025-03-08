import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-text">
               <h1>Welcome to Food Ordering App</h1>
               <p>Order delicious food online!</p>
           </div>

        </div>
    );
};

export default Home;
