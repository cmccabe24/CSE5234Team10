//test
import React from 'react';
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const{ order } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/viewConfirmation', { state: { order: order } });
    };

    let totalCost = 0;
    
    // for loop to calculate the total cost
    for (let i = 0; i < order.buyQuantity.length; i++) {
        totalCost += order.buyQuantity[i] * order.products[i].price;
    }


    return (
        <div>
            <h1> Order Summary </h1>
            <form onSubmit={handleSubmit}>
            {order.buyQuantity.map((qty, index) => (
                qty > 0 && (
                    <h2 key={index}> 
                        {qty} of {order.products[index].name} for ${qty * order.products[index].price} 
                    </h2>
                )
            ))}
                <br/>
            
                <h2> Total cost = ${totalCost} </h2>
                <br/>
            
                <button className='button'>Submit order</button>
            </form>
        </div>
    );
};

export default ViewOrder;
