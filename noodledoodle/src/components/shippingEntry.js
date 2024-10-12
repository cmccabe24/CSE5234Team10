import React from 'react';
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const ShippingEntry = () => {

    // changed to const from let because we won't be reassigning location 
	const location = useLocation();
    const navigate = useNavigate();

    const  prevOrder = location.state.order;
	const [order, setOrder] = useState(prevOrder); 


    const handleSubmit = (e) => {
        navigate('/home/viewOrder', { state: { order: order } });
    }

    const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrder((order) => ({
			...order,
			[name]: value,
		}));
	};

    return (
        <div>
            <h2> Shipping Information </h2>
            <form onSubmit={handleSubmit}>
                <label>Address 1</label>
                <input
                    type='text'
                    name='address_1'
                    required
                    onChange={handleInputChange}
                />
                <br/>
                
                <label>Address 2</label>
                <input
                    type='text'
                    name='address_2'
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>City</label>
                <input
                    type='text'
                    name='city'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>State</label>
                <input
                    type='text'
                    name='state'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>Zip Code</label>
                <input
                    type='number'
                    name='zip'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <button className='button'>Review order</button>
            </form>
        </div>
    );
};

export default ShippingEntry;