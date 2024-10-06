import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        setOrder({ ...order, cart: newCart });
    };

    const handleQuantityChange = (index, newQuantity) => {
        const newCart = [...order.cart];
        newCart[index].quantity = parseInt(newQuantity, 10);
        setOrder({ ...order, cart: newCart });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/paymentEntry', { state: {order: order}});
        console.log('order: ', order);
    };
    
    return (
        <div style={{ backgroundColor: '#f7f0e6', minHeight: '100vh', padding: '20px' }}>
            <img src="noodlelogo.png" alt='banner' style={styles.logoImage}/>
                
             <img src="noodledoodlebanner.png" alt='banner' style={styles.bannerImage}/>
             <h2 style={styles.title}>{title}</h2>
            

            {/* Flexbox container for products */}
            <form onSubmit={handleSubmit}>
                <div style={styles.productContainer}>
                    {order.products.map((product, index) => (
                        <div key={index} style={styles.productItem}>
                            <img src={`/${product.name.toLowerCase().replace(" ", "")}.png`} alt={product.name} style={styles.productImage} />
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
                <div style={styles.cartContainer}>
                    <h2>Shopping Cart</h2>
                    {order.cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul style={styles.cartList}>
                            {order.cart.map((item, index) => (
                                <li key={index} style={styles.cartItem}>
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
                <button type="submit" className="button">Proceed to Checkout</button>
            </form>
        </div>
    );
};

// Inline styles for Flexbox layout
const styles = {
    productContainer: {
        display: 'flex',               
        justifyContent: 'center', 
        alignItems: 'center',         
        margin: '0px 0',           
        gap: '100px'  ,
        marginTop: '30px',  
        backgroundColor:'#f7f0e6'      
    },
    title: {
        fontFamily: "'Protest Strike', sans-serif", 
        marginBottom: '50px',
        fontSize: '50px'
    },
    productItem: {
        textAlign: 'center',           
        width: '150px'                 
    },
    productImage: {
        width: '200px', 
        height: '300px'
    },
    bannerImage: {
        width: '1410px', 
        height: '350px'
    },
    logoImage: {
        width: '700px', 
        height: '300px'
    },
    cartContainer: {
        marginTop: '50px',
        textAlign: 'left',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#F6CDD5'
    },
    cartList: {
        listStyleType: 'none',
        padding: 0
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
    }
};

export default Purchase;
