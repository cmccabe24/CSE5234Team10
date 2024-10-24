import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../static/shippingEntry.css'
const ShippingEntry = ({handleInputChange}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home/viewOrder');
    }


    return (
        <div className= "shippingEntryCss">
            <h2> Shipping Information </h2>
            <form onSubmit={handleSubmit}>
                <label>Address 1</label>
                <br />
                <input
                    type='text'
                    name='address_1'
                    required
                    data-section='shipping'
                    onChange={handleInputChange}
                />
                <br/>
                
                <label>Address 2</label>

                <br />
                <input
                    type='text'
                    name='address_2'
                    data-section='shipping'
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>City</label>
                <br />
                <input
                    type='text'
                    name='city'
                    required
                    data-section='shipping'
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>State</label>
                <br />
                <input
                    type='text'
                    name='state'
                    required
                    data-section='shipping'
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>Zip Code</label>
                <br />
                <input
                    type='number'
                    name='zip'
                    required
                    data-section='shipping'
                    onChange={handleInputChange}
                />
                <br/>
            
                <button className='button'>Review order</button>
            </form>
        </div>
    );
};

export default ShippingEntry;