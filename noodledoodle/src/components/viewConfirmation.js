import React from 'react';
import '../static/viewConfirmation.css'; // Use the same CSS file to keep styles consistent

const ViewConfirmation = ({ orderState }) => {
    const isSuccess = orderState.status === "success";
    console.log("Huh: ", orderState);
    return (
        <div className="viewConfirmation">
            {isSuccess ? (
                <>
                    <h1 className="success-message">Thank You For Shopping With Noodle Doodle!</h1>
                    <p>Your order number is: <strong>{orderState.data.confirmation_number}</strong></p>
                    
                    <h2>Order Summary</h2>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orderState.data.order_details.cart.map((item, index) => (
                            item.quantity > 0 && (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            )
                        ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <div>
                    <h2>Order Submission Failed</h2>
                    <p>We encountered an issue with your order. Please see the details below:</p>
                    
                    <h3>Unavailable Items</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Requested Quantity</th>
                                <th>Available Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderState.data.unavailableItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.itemNumber}</td> {/* Replace with item name if you have that information */}
                                    <td>{item.requested}</td>
                                    <td>{item.available}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    <p>You can try again on the <a href="/">home page</a>.</p>
                </div>
            )}
        </div>
    );
};

export default ViewConfirmation;
