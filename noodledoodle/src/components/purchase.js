import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import '../static/purchase.css';

const Purchase = () => {
    let title = "Purchase Page";
    
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0],
        products: [
            {name: 'Art Print', price: 12},
            {name: 'Candle', price: 20},
            {name: 'Sticker', price: 5},
            {name: 'Mug', price: 15},
            {name: 'Tshirt', price: 25},
        ],
        credit_card_number: '',
        expiration_date: '',
        cvvCode: '',
        card_holder_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
        cart: []
    });

    const navigate = useNavigate();
    
    const handleAddToCart = (index) => {
        const product = order.products[index];
        const quantity = order.buyQuantity[index];
        
        if (quantity > 0) {
            const newCart = [...order.cart];
            const existingItemIndex = newCart.findIndex(item => item.name === product.name);

            if (existingItemIndex !== -1) {
                newCart[existingItemIndex].quantity = parseInt(quantity, 10);
            } else {
                newCart.push({ ...product, quantity: parseInt(quantity, 10) });
            }
            setOrder({ ...order, cart: newCart });
        }
    };

    const handleRemoveFromCart = (index) => {
        const newCart = order.cart.filter((_, i) => i !== index);

        const productIndex = order.products.findIndex(product => product.name === order.cart[index].name);
        const updatedBuyQuantity = [...order.buyQuantity];
        updatedBuyQuantity[productIndex] = 0;

        setOrder({ ...order, cart: newCart, buyQuantity: updatedBuyQuantity});
    };

    const handleQuantityChange = (index, newQuantity) => {
        const newCart = [...order.cart];
        newCart[index].quantity = parseInt(newQuantity, 10);

        const productIndex = order.products.findIndex(product => product.name === order.cart[index].name);
        const updatedBuyQuantity = [...order.buyQuantity];
        updatedBuyQuantity[productIndex] = parseInt(newQuantity, 10);

        setOrder({ ...order, cart: newCart, buyQuantity: updatedBuyQuantity });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home/paymentEntry', { state: {order: order}});
        console.log('order: ', order);
    };
    
    return (
        <div className="purchasePage">
            <nav className="navBar">
                <Link to="/home/aboutUs" className="navLink">About Us</Link>
                <Link to="/home/contactUs" className="navLink">Contact Us</Link>
            </nav>
            <img src="noodlelogo.png" alt='banner' className="logoImage"/>
            <img src="noodledoodlebanner.png" alt='banner' className="bannerImage"/>
            <h2 className="title">{title}</h2>

            {/* Flexbox container for products */}
            <form onSubmit={handleSubmit}>
                <div className="productContainer">
                    {order.products.map((product, index) => (
                        <div key={index} className="productItem">
                            <img src={`/${product.name.toLowerCase().replace(" ", "")}.png`} alt={product.name} className="productImage" />
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <label>Quantity</label>
                            <input
                                type="number"
                                min="0"
                                value={order.buyQuantity[index]}
                                onChange={(e) => { 
                                    const newQuantity = [...order.buyQuantity];
                                    newQuantity[index] = e.target.value;
                                    setOrder({ ...order, buyQuantity: newQuantity });
                                }}
                            />
                            <button type="button" onClick={() => handleAddToCart(index)}>Add to Cart</button>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="cartContainer">
                    <h2>Shopping Cart</h2>
                    {order.cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul className="cartList">
                            {order.cart.map((item, index) => (
                                <li key={index} className="cartItem">
                                    <span>{item.name} - ${item.price} x {item.quantity}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                                    />
                                    <button type="button" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <br />
                <button type="submit" className="button" disabled={order.cart.every(quantity => quantity === 0)} > Proceed to Checkout </button>
            </form>
        </div>
    );
};

export default Purchase;