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
                {order.address_1 = e.target.value}}
            />
            <br/>
            <label>Address 2</label>
            <input
                type='text'
                onChange={(e) =>
                {order.address_2 = e.target.value}}
            />
            <br/>
            <label>City</label>
            <input
                type='text'
                required
                onChange={(e) =>
                {order.city = e.target.value}}
            />
            <br/>
            <label>State</label>
            <input
                type='text'
                required
                onChange={(e) =>
                {order.state = e.target.value}}
            />
            <br/>
            <label>Address 2</label>
            <input
                type='number'
                required
                onChange={(e) =>
                {order.zip = e.target.value}}
            />
            <br/>
            <button className='button'>Review order</button>
            </form>
            </div>
    );
};

export default ShippingEntry;