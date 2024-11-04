import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/viewOrder.css';  // Adjust the path as per your project structure
import axios from 'axios';
import {useState } from "react";
const API_BASE_URL = 'https://9fhq16841a.execute-api.us-east-2.amazonaws.com/dev';

const ViewOrder = ({ order, setOrderState}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    console.log("order: ", order);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Before call");
            // Make the API call to order-processing Lambda function
            const response = await axios.post(`${API_BASE_URL}/order-processing/order`, order);
            console.log("After ");
            // Navigate to the confirmation page
            if (response.status === 200) {
                setOrderState({ status: "success", data: response.data });
            } else {
                setOrderState({ status: "fail", data: response.data });
            }
            navigate('/home/viewConfirmation'); 
            
        } catch (error) {
            console.error('Invalid order due to unavailable inventory', error);

            setErrorMessage('Invalid order due to unavailable inventory!');
        }
    };

    let totalCost = 0;

    // Calculate the total cost
    for (let i = 0; i < order.cart.length; i++) {
        totalCost += order.cart[i].quantity * order.cart[i].unitPrice;
    }

    return (
        <div className="viewOrder">
            {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
            <h1>Order Summary</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {order.cart.map((item, index) => (
                        item.quantity > 0 && (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.unitPrice.toFixed(2)}</td>
                                <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
            
            <h2 className="total-cost">Total cost: ${totalCost.toFixed(2)}</h2>

            <button className="button" onClick={handleSubmit}>Submit Order</button>

        </div>
        );
};

export default ViewOrder;
