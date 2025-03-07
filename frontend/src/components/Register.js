import React, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = () => {
        alert(`Registering: ${user.email}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Register</h2>
            <input 
                type="email" name="email" placeholder="Email"
                value={user.email} onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <input 
                type="password" name="password" placeholder="Password"
                value={user.password} onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <button className="bg-blue-500 text-white p-2 w-full" onClick={handleRegister}>
                Register
            </button>
        </div>
    );
};

export default Register;
