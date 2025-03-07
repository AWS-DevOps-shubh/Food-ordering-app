import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const OrdersPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch user's order history from backend (dummy data for now)
        setOrders([
            { id: 1, item: "Pizza", price: 12.99, date: "2025-03-07", status: "Delivered" },
            { id: 2, item: "Burger", price: 8.99, date: "2025-03-06", status: "On the Way" }
        ]);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <h2 className="text-xl font-bold">My Orders</h2>
                {user ? (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id} className="p-2 border-b">
                                {order.item} - ${order.price} - {order.date} - <strong>{order.status}</strong>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Please log in to view your orders.</p>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
