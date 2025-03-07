import React, { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        alert(`Logging in with: ${credentials.email}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Login</h2>
            <input 
                type="email" name="email" placeholder="Email"
                value={credentials.email} onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <input 
                type="password" name="password" placeholder="Password"
                value={credentials.password} onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <button className="bg-blue-500 text-white p-2 w-full" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
