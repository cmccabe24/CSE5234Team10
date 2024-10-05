//test
import React from 'react';
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const{ order } = location.state || { order: {} };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/viewConfirmation', { state: { order } });
    };

    // Calculate total cost by summing the quantities
    const totalCost = order.buyQuantity.reduce((total, qty) => total + qty, 0);

    return (
        <div>
            <h1> Order Summary </h1>
            <form onSubmit={handleSubmit}>
                {order.buyQuantity.map((qty, index) => (
                    <h2 key={index}>
                        Purchase {qty} of Product {index + 1} for ${qty}
                    </h2>
                ))}
                <br/>
            
                <h2> Total cost = ${totalCost} </h2>
                <br/>
            
                <button className='button'>Submit order</button>
            </form>
        </div>
    );
    
};

                    /*
                    Purchase {location.state.order.buyQuantity[0]} of Product 1 for ${location.state.order.buyQuantity[0]}
                    Purchase {location.state.order.buyQuantity[1]} of Product 2 for ${location.state.order.buyQuantity[1]}
                    Purchase {location.state.order.buyQuantity[2]} of Product 3 for ${location.state.order.buyQuantity[2]}
                    Purchase {location.state.order.buyQuantity[3]} of Product 4 for ${location.state.order.buyQuantity[3]}
                    Purchase {location.state.order.buyQuantity[4]} of Product 5 for ${location.state.order.buyQuantity[4]}
                    */

export default ViewOrder;
