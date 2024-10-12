import React from 'react';
import '../static/viewConfirmation.css';  // Use the same CSS file to keep styles consistent

const ViewConfirmation = ({ order, setOrder }) => {
    return (
        <div className="viewConfirmation">
            <h1 className="success-message">Thank You For Shopping With Noodle Doodle!</h1>
            <p>Your order number is: <strong>790832474327341</strong></p>
            
            <h2>Order Summary</h2>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {order.buyQuantity.map((qty, index) => (
                        qty > 0 && (
                            <tr key={index}>
                                <td>{order.products[index].name}</td>
                                <td>{qty}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewConfirmation;
