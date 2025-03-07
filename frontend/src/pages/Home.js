import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center p-6">
                <h1 className="text-2xl font-bold">Welcome to Food Ordering App</h1>
                <p className="mt-2">Order delicious food online!</p>
            </div>
        </div>
    );
};

export default Home;
