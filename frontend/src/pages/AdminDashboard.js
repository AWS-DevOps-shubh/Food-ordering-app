import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
    const [orders] = useState([
        { id: 1, user: "John", item: "Pizza", price: 12.99, status: "Pending" },
        { id: 2, user: "Alice", item: "Burger", price: 8.99, status: "Delivered" }
    ]);

    const updateOrderStatus = (id, newStatus) => {
        alert(`Order ${id} status changed to ${newStatus}`);
    };

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
                <h3 className="text-lg mt-4">Manage Orders</h3>
                <ul>
                    {orders.map(order => (
                        <li key={order.id} className="p-2 border-b">
                            {order.user} - {order.item} - ${order.price} - 
                            <strong> {order.status} </strong>
                            <button 
                                className="ml-4 bg-blue-500 text-white px-2 py-1" 
                                onClick={() => updateOrderStatus(order.id, "Shipped")}>
                                Mark as Shipped
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
