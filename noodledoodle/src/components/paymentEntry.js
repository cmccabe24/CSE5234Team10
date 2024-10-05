//test
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentEntry = () => {
	// changed to const from let because we won't be reassigning location 
	const location = useLocation();
    const navigate = useNavigate();

	// making sure that state is defined 
	const { order, setOrder } = location.state || { order: {}, setOrder: () => {} }; 


    const handleSubmit = (e) => {
		e.preventDefault();
		// navigate to shipping entry page once the payment information is submitted 
	    navigate('/purchase/shippingEntry', { state: { order, setOrder } });
    }; 

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrder((prevOrder) => ({
			...prevOrder,
			[name]: value,
		}));
	};

	console.log('order: ', order);

	return ( 
    	<div>
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
			
				<button className='button'>Shipping Information</button>
			</form>
		</div>
    );		
};

export default PaymentEntry;