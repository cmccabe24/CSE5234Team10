import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const viewConfirmation = () => {
	let location = useLocation();
	const [order, setOrder ] = location.state;

	console.log('order: ', order);
	return (
		<div>
			<label>Thank You For Shopping With Noodle Doodle!</label>
			<br/>
			<plaintext>Your order number is: 790832474327341</plaintext>
			<br/>
			<plaintext>Order Summary: </plaintext>
			<br/>
			<h1>
                Product 1 {order.buyQuantity[0]}
                Product 2 {order.buyQuantity[1]} 
                Product 3 {order.buyQuantity[2]} 
                Product 4 {order.buyQuantity[3]} 
                Product 5 {order.buyQuantity[4]} 
            </h1>
		</div>
	);

};

export default viewConfirmation;
