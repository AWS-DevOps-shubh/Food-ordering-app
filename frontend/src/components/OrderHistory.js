import React from 'react';

const OrderHistory = () => {
    const orders = [
        { id: 1, item: "Pizza", price: 12.99, date: "2025-03-07" },
        { id: 2, item: "Burger", price: 8.99, date: "2025-03-06" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id} className="p-2 border-b">
                        {order.item} - ${order.price} - {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
