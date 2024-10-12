import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/viewOrder.css';  // Adjust the path as per your project structure

const ViewOrder = ({ order, setOrder }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home/viewConfirmation');
    };

    let totalCost = 0;

    // Calculate the total cost
    for (let i = 0; i < order.buyQuantity.length; i++) {
        totalCost += order.buyQuantity[i] * order.products[i].price;
    }

    return (
        <div className="viewOrder">
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
                    {order.buyQuantity.map((qty, index) => (
                        qty > 0 && (
                            <tr key={index}>
                                <td>{order.products[index].name}</td>
                                <td>{qty}</td>
                                <td>${order.products[index].price.toFixed(2)}</td>
                                <td>${(qty * order.products[index].price).toFixed(2)}</td>
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
