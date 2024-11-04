import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../static/paymentEntry.css';

const PaymentEntry = ({order, setOrder, handleInputChange}) => {
	const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validateForm();
		console.log("validation: ", validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			navigate('/home/shippingEntry');
		} else {
			setErrors(validationErrors);
		}
    }; 

	const validateForm = () => {
		const newErrors = {};

        // Credit Card Number: 16 digits
        const validCreditCard = /^\d{16}$/;
        if (!validCreditCard.test(order.payment_details.cardNumber)) {
            newErrors.credit_card_number = 'Invalid credit card number. Must be 16 digits.';
        } else {
			delete newErrors.credit_card_number;
		}
		
        // Expiration Date: MM/YY format
        const validExpirationDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!validExpirationDate.test(order.payment_details.expirationDate)) {
            newErrors.expiration_date = 'Invalid expiration date. Use MM/YY format.';
        } else {
			delete newErrors.expiration_date;
		}

        // CVV Code: 3-4 digits
        const validCVV = /^[0-9]{3,4}$/;
        if (!validCVV.test(order.payment_details.cvv)) {
            newErrors.cvvCode = 'Invalid CVV. Must be 3 or 4 digits.';
        } else {
			delete newErrors.cvvCode;
		}

        // Card Holder Name: Only letters and spaces
        const validHolderName = /^[a-zA-Z\s]+$/;
        if (!validHolderName.test(order.payment_details.cardholderName)) {
            newErrors.card_holder_name = 'Invalid name. Only letters and spaces allowed.';
        } else {
			delete newErrors.card_holder_name;
		}

        return newErrors;
	}

	
	return ( 
		<div className="paymentEntryCss">
			<h2> Payment Information </h2> 
			<form onSubmit ={handleSubmit} >
				<label>Credit Card Number</label>
				{errors.credit_card_number && <span className="error">{errors.credit_card_number}</span>}
				<br />
		    	<input
					type='text'
					// correct input name for state update
					name='cardNumber' 
					required
					data-section='payment'
					onChange={handleInputChange}
					
				/>
				<br/>

				
                <label>Expiration Date</label>
                {errors.expiration_date && <span className="error">{errors.expiration_date}</span>}
				<br />
            	<input
                	type='text'
                	name='expirationDate'
                	required
					data-section='payment'
                	onChange={handleInputChange}
            	/>
            	<br/>				
				
				<label>CVV Code</label>
				{errors.cvvCode && <span className="error">{errors.cvvCode}</span>}
				<br />
				<input
					type='text'
					// matching key in the order object
					name='cvv'
					required
					data-section='payment'
					onChange={handleInputChange}
				/>
				<br/>
			
				<label>Credit Holder Name</label>
				{errors.card_holder_name && <span className="error">{errors.card_holder_name}</span>}
				<br />
            	<input
					type='text'
					// matching key in the order object
					name='cardholderName'
					required
					data-section='payment'
					onChange={handleInputChange}
				/>
				<br/>
			
				<button className='button'>Continue to Shipping Information</button>
			</form>
		</div>
    );		
};

export default PaymentEntry;