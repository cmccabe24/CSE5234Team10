import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import '../static/purchase.css';

const Purchase = ({ order, setOrder, handleAddToCart, handleRemoveFromCart, handleQuantityChange }) => {
    let title = "Purchase Page";
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //navigate('/home/paymentEntry', { state: {order: order}});
        navigate('/home/paymentEntry');
        console.log('order: ', order);
    };
    
    return (
        <div className="purchasePage">
            <nav className="navBar">
                <Link to="/home/aboutUs" className="navLink">About Us</Link>
                <Link to="/home/contactUs" className="navLink">Contact Us</Link>
            </nav>
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