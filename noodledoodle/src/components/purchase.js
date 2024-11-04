import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import '../static/purchase.css';


const Purchase = ({ order, setOrder, handleAddToCart, handleRemoveFromCart, handleQuantityChange, inventory, setInventory}) => {
    let title = "Purchase Page";
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home/paymentEntry');
    };
    
    return (
        <>
            <nav className="navBar">
                <Link to="/home" className="navLink">Home</Link>
                <Link to="/home/aboutUs" className="navLink">About Us</Link>
                <Link to="/home/contactUs" className="navLink">Contact Us</Link>
            </nav>
            <img src="/shopProdWave.png" alt='Prodbanner'className="shop"/>
            <div className="purchasePage">
                {/* Flexbox container for products */}
                <form onSubmit={handleSubmit}>
                    <div className="productContainer">
                        {inventory.map((item, index) => (
                            <div key={item.itemNumber} className="productItem">
                                <img src={`/${item.name.toLowerCase().replace(" ", "")}.png`} alt={item.name} className="productImage" />
                                <h2>{item.name}</h2>
                                <h3>${item.unitPrice}</h3>
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={order.buyQuantity[index] || 0}
                                    onChange={(e) => { 
                                        const newQuantity = [...order.buyQuantity];
                                        newQuantity[index] = e.target.value;
                                        setOrder({ ...order, buyQuantity: newQuantity });
                                    }}
                                />
                                <button type="button" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
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
                                    <li key={item.itemNumber} className="cartItem">
                                        <div className="cartItemDetails">
                                        <img src={`/${item.name.toLowerCase().replace(" ", "")}.png`} alt={item.name} className="cartItemImage" />
                                        </div>
                                        <span>{item.name} - ${item.unitPrice} x {item.quantity}</span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.itemNumber, e.target.value)}
                                        />
                                        <button type="button" onClick={() => handleRemoveFromCart(item.itemNumber)}>Remove</button>                                        
                                    </li>  
                                ))}
                            </ul>
                        )}
                    </div>

                <br />
        
        <button 
            type="submit" 
            className="button" 
            disabled={order.cart.every(quantity => quantity === 0)} 
            style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer' }} 
        >
            <img src="/shopCheckout.png" alt="Proceed to Checkout" className="checkoutImage" />
        </button>
            </form>
        </div>
        </>
    );
};

export default Purchase;