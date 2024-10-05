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
    } 
	//console.log('order: ', order);

return ( 
    <div>
	<form onSubmit ={handleSubmit}>
		<label>Credit Card Number</label>
		    <input
				type='text'
				required
				onChange={(e) =>
					{order.credit_card_numer = e.target.value;}
				}
			/>
			<br/>
        <label>Expiration Date</label>
			<input
				type='text'
				required
				onChange={(e) =>
					{order.expir_date = e.target.value;}
				}
			/>
			<br/>
		<label>CVV Code</label>
			<input
				type='text'
				required
				onChange={(e) =>
					{order.cvvCode = e.target.value;}
				}
			/>
			<br/>
		<label>Credit Holder Name</label>
            <input
				type='text'
				required
				onChange={(e) =>
					{order.card_holder_name = e.target.value;}
				}
			/>
			<br/>
			<button className='button'>Shipping Information</button>
			</form>
		</div>
    );		
};

export default PaymentEntry;