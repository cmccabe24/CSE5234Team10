//test
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const viewOrder = () => {

    let location = useLocation();
    const[order, setOrder] = location.state;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation', {order:order, setOrder:setOrder});
    }

    return (
        <div>
            <h1>
                Product 1 {location.state.order.buy}
            </h1>
        </div>



    );
    
};
