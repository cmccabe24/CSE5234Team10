//test
import React from 'react';
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const ViewOrder = () => {

    let location = useLocation();
    const[order, setOrder] = location.state;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation', {order:order, setOrder:setOrder});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>
                Purchase {location.state.order.buyQuantity[0]} of Product 1 for ${location.state.order.buyQuantity[0]}
                Purchase {location.state.order.buyQuantity[1]} of Product 2 for ${location.state.order.buyQuantity[1]}
                Purchase {location.state.order.buyQuantity[2]} of Product 3 for ${location.state.order.buyQuantity[2]}
                Purchase {location.state.order.buyQuantity[3]} of Product 4 for ${location.state.order.buyQuantity[3]}
                Purchase {location.state.order.buyQuantity[4]} of Product 5 for ${location.state.order.buyQuantity[4]}
            </h1>
            <br/>
            <h1>
                Total cost = {location.state.order.buyQuantity[0] + location.state.order.buyQuantity[1] + location.state.order.buyQuantity[2] + location.state.order.buyQuantity[3] + location.state.order.buyQuantity[4]}
            </h1>
            <br/>
            <button className='button'>Submit order</button>
            </form>
        </div>
    );
    
};

export default ViewOrder;
