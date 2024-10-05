import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentEntry = () => {
	// changed to const from let because we won't be reassigning location 
	const location = useLocation();
	const prevOrder = location.state.order;
	const [order, setOrder] = useState(prevOrder);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
		// pass the state to shippingEntry
	    navigate('/purchase/shippingEntry', { state: { order: order }});
    }; 

	
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrder((order) => ({
			...order,
			[name]: value,
		}));
	};
	
	return ( 
    	<div>
			<h2> Payment Information </h2> 
			<form onSubmit ={handleSubmit}>
				<label>Credit Card Number</label>
		    	<input
					type='text'
					// correct input name for state update
					name='credit_card_number' 
					required
					onChange={handleInputChange}
					
				/>
				<br/>
        		
				<label>Expiration Date</label>
				<input
					type='text'
					// matching key in the order object
					name='expiration_date'
					required
					onChange={handleInputChange}
				/>
				<br/>
				
				<label>CVV Code</label>
				<input
					type='text'
					// matching key in the order object
					name='cvvCode'
					required
					onChange={handleInputChange}
				/>
				<br/>
			
				<label>Credit Holder Name</label>
            	<input
					type='text'
					// matching key in the order object
					name='card_holder_name'
					required
					onChange={handleInputChange}
				/>
				<br/>
			
				<button className='button'>Continue to Shipping Information</button>
			</form>
		</div>
    );		
};

export default PaymentEntry;