import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
    let title = "Purchase Page";
    
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0],
        products: [
            {name: 'Product A', price: 1},
            {name: 'Product B', price: 1},
            {name: 'Product C', price: 1},
            {name: 'Product D', price: 1},
            {name: 'Product E', price: 1},
        ],
        credit_card_number: '',
        expiration_date: '',
        cvvCode: '',
        card_holder_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: ''
    });
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/paymentEntry', { state: {order: order}});
        console.log('order: ', order);
    };
    
    return (
        <div style={{ backgroundColor: '#f7f0e6', minHeight: '100vh', padding: '20px' }}>
            <form onSubmit ={handleSubmit}>
                <h1 style={styles.title}>{title}</h1>

                {/* Flexbox container for products */}
                <div style={styles.productContainer}>
                    {/* Product 1 */}
                    <div style={styles.productItem}>
                        <img src="/artPrint.jpg" alt="Product 1" style={styles.productImage} />
                        <h2>{order.products[0].name}</h2>
                        <h3>${order.products[0].price}</h3>
                        <label>Quantity</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { 
                                const newQuantity = [...order.buyQuantity];
                                newQuantity[0] = e.target.value;
                                setOrder({ ...order, buyQuantity: newQuantity });
                            }}
                        />
                    </div>
                
                    {/* Product 2 */}
                    <div style={styles.productItem}>
                        <img src="/candle.jpg" alt="Product 2" style={styles.productImage} />
                        <h2>{order.products[1].name}</h2>
                        <h3>${order.products[1].price}</h3>
                        <label>Quantity</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { 
                                const newQuantity = [...order.buyQuantity];
                                newQuantity[1] = e.target.value;
                                setOrder({ ...order, buyQuantity: newQuantity });
                            }}
                        />
                    </div>

                    {/* Product 3 */}
                    <div style={styles.productItem}>
                        <img src="/sticker.jpg" alt="Product 3" style={styles.productImage} />
                        <h2>{order.products[2].name}</h2>
                        <h3>${order.products[2].price}</h3>
                        <label>Quantity</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { 
                                const newQuantity = [...order.buyQuantity];
                                newQuantity[2] = e.target.value;
                                setOrder({ ...order, buyQuantity: newQuantity });
                            }}
                        />
                    </div>
                </div>

                {/* Centered container for Products 4 and 5 */}
                <div style={styles.centeredProductContainer}>
                    {/* Product 4 */}
                    <div style={styles.productItem}>
                        <img src="/mug.jpg" alt="Product 4" style={styles.productImage} />
                        <h2>{order.products[3].name}</h2>
                        <h3>${order.products[3].price}</h3>
                        <label>Quantity</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { 
                                const newQuantity = [...order.buyQuantity];
                                newQuantity[3] = e.target.value;
                                setOrder({ ...order, buyQuantity: newQuantity });
                            }}
                        />
                    </div>

                    {/* Product 5 */}
                    <div style={styles.productItem}>
                        <img src="https://via.placeholder.com/150" alt="Product 5" style={styles.productImage} />
                        <h2>{order.products[4].name}</h2>
                        <h3>${order.products[4].price}</h3>
                        <label>Quantity</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { 
                                const newQuantity = [...order.buyQuantity];
                                newQuantity[4] = e.target.value;
                                setOrder({ ...order, buyQuantity: newQuantity });
                            }}
                        />
                    </div>
                </div>

                <br />

                <button className="button">Pay</button>
            </form>
        </div>
    );
};

// Inline styles for Flexbox layout
const styles = {
    productContainer: {
        display: 'flex',               // Flexbox layout
        justifyContent: 'center', // Space items evenly in the row
        alignItems: 'center',          // Align items vertically in the center
        //flexWrap: 'wrap',              // Allow wrapping to the next line
        margin: '50px 0' ,           // Add vertical spacing between rows
        gap: '250px'                    // Space between products
    },
    centeredProductContainer: {
        display: 'flex',               // Flexbox layout
        justifyContent: 'center',      // Center the products
        alignItems: 'center',          // Align items vertically in the center
        margin: '50px 0',              // Add vertical spacing
        gap: '250px'                    // Space between products
    },
    title: {
        fontFamily: "'Protest Strike', sans-serif", // Apply the font to the title
        marginBottom: '50px',
        fontSize: '50px'

    },
    productItem: {
        textAlign: 'center',           // Center-align the text
        width: '150px'                 // Set a fixed width for each product item
    },
    productImage: {
        width: '250px', // Set the desired width of the image
        height: '300px', // Set the desired height of the image
        //objectFit: 'cover' // Maintain aspect ratio while covering the area
        //width: '100%',                 // Make the image take up the full width of its container
       //height: 'auto'                 // Maintain the aspect ratio of the image
    }
};

export default Purchase;
