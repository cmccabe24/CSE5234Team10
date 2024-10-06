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
			<h2>Order Summary: </h2>
			<br/>
			{order.buyQuantity.map((qty, index) => (
                qty > 0 && (
                    <h1 key={index}> 
                        {order.products[index].name} - {order.buyQuantity[index]}
                    </h1>
                )
            ))}
		</div>
	);

};

export default ViewConfirmation;
