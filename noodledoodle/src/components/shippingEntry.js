//test
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ShippingEntry = () => {

    let location = useLocation();
    const[order, setOrder] = location.state;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', {order:order, setOrder:setOrder});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Address 1</label>
            <input
                type='text'
                required
                onChange={(e) =>
                {location.state.order.address_1 = e.target.value}}
            />
            <br/>
            <label>Address 2</label>
            <input
                type='text'
                onChange={(e) =>
                {location.state.order.address_2 = e.target.value}}
            />
            <br/>
            <label>City</label>
            <input
                type='text'
                required
                onChange={(e) =>
                {location.state.order.city = e.target.value}}
            />
            <br/>
            <label>State</label>
            <input
                type='text'
                required
                onChange={(e) =>
                {location.state.order.state = e.target.value}}
            />
            <br/>
            <label>Address 2</label>
            <input
                type='number'
                required
                onChange={(e) =>
                {location.state.order.zip = e.target.value}}
            />
            <br/>
            <button className='button'>View Order</button>
            </form>
            </div>
    );
};

export default ShippingEntry;