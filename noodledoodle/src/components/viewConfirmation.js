import React from 'react';

const Confirmation = () => {
  const title = "Order Confirmation"; // Define the title variable

  return (
    <div>
      <h1>{title}</h1>
      <p>Thank you for your purchase! Your order has been confirmed.</p>
      <p>Order details and shipping information will be sent to your email.</p>
      {/* Add more details here if needed */}
    </div>
  );
}

export default Confirmation;
