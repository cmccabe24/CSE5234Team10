import React from 'react';
import {useLocation} from 'react-router-dom';

const ViewConfirmation = () => {
	const location = useLocation();
	const { order } = location.state;

	return (
		<div>
			<label>Thank You For Shopping With Noodle Doodle!</label>
			<br/>
			<plaintext>Your order number is: 790832474327341</plaintext>
			<br/>
			<plaintext>Order Summary: </plaintext>
			<br/>
			<h1>
                Product 1 - {order.buyQuantity[0]} <br></br>
                Product 2 - {order.buyQuantity[1]} <br></br>
                Product 3 - {order.buyQuantity[2]} <br></br>
                Product 4 - {order.buyQuantity[3]} <br></br>
                Product 5 - {order.buyQuantity[4]} 
            </h1>
		</div>
	);

};

export default ViewConfirmation;
