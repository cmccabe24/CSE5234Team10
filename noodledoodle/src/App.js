//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import Home from "./components/home";
import Purchase from "./components/purchase";
import PaymentEntry from "./components/paymentEntry";
import ShippingEntry from "./components/shippingEntry";
import ViewOrder from "./components/viewOrder";
import ViewConfirmation from "./components/viewConfirmation";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import './static/purchase.css';
import './static/global.css';
import { getInventory, getItemById} from './apiService'; // Adjust the path as necessary


function App() {
  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0],
    products: [
        {name: 'Art Print', price: 12},
        {name: 'Candle', price: 20},
        {name: 'Sticker', price: 5},
        {name: 'Mug', price: 15},
        {name: 'Tshirt', price: 25},
    ],
    cart: [],
    payment_details: [],
    shipping_details: []
  });

  const [orderState, setOrderState] = useState({ status: "", data: {} });

  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
        try {
            const data = await getInventory();
            //console.log("Fetched data", data);
            setInventory(data.inventory); // Assuming response has { inventory: [...] }
        } catch (err) {
            setError('Failed to load inventory');
        } finally {
            setLoading(false);
        }
    };

    fetchInventory();
  }, []);

  {/* New Way */}
  const handleAddToCart = async (itemId) => {
    try {
      const response = await getItemById(itemId);
      console.log("Item from id: ", response);

      const item = response.data[0];
      const productName = item.name;
      const quantity = item.quantity;
      const amountOrdered = order.buyQuantity[itemId - 1];

      if (amountOrdered > 0) {
        if (amountOrdered <= quantity) {
          const newCart = [...order.cart];
          const existingItemIndex = newCart.findIndex(cartItem => cartItem.name === productName)

          if (existingItemIndex !== -1) {
            newCart[existingItemIndex].quantity = parseInt(amountOrdered, 10);
          } else {
            newCart.push({ ...item, quantity: parseInt(amountOrdered, 10) });
          }
        
          setOrder({ ...order, cart: newCart });

          /* (Add) Update lambda's stock? */

        } else {
          console.error("Not enough in stock");
        }
      }
    } catch(error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleRemoveFromCart = (index) => {
      const newCart = order.cart.filter(cartItem => cartItem.id !== index);

      const updatedBuyQuantity = [...order.buyQuantity];
      updatedBuyQuantity[index-1] = 0;
    
      /* (Add) Replenish lambda's stock? */

      setOrder({ ...order, cart: newCart, buyQuantity: updatedBuyQuantity});
  };

  useEffect(() => {
    console.log("After state update: ", order.buyQuantity);
    console.log("cart: ", order.cart);
  }, [order]);  // This will trigger whenever `order` changes, logging the updated value


const handleQuantityChange = (index, newQuantity) => {
    const cartIndex = order.cart.findIndex(cartItem => cartItem.id === index);
    const newCart = [...order.cart];
    newCart[cartIndex].quantity = parseInt(newQuantity, 10);

    //const productIndex = order.products.findIndex(product => product.name === order.cart[index].name);
    const updatedBuyQuantity = [...order.buyQuantity];
    updatedBuyQuantity[index-1] = parseInt(newQuantity, 10);

    setOrder({ ...order, cart: newCart, buyQuantity: updatedBuyQuantity });
};

const handleInputChange = (e) => {
  const { name, value, dataset } = e.target;

  setOrder((order) => {
    const updatedOrder = { ...order };

    if (dataset.section === 'payment') {
      // Update payment details
      updatedOrder.payment_details = {
        ...order.payment_details,
        [name]: value
      };
    } else if (dataset.section === 'shipping') {
      // Update shipping details
      updatedOrder.shipping_details = {
        ...order.shipping_details,
        [name]: value
      };
    }

    return updatedOrder;
  });
};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
    <Router>
      <Link to="/home">
        <img src="noodlelogo.png" alt='logo' className="logoImage" />
      </Link>
      <div className="content">
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home/purchase' element={<Purchase order={order} setOrder={setOrder} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} handleQuantityChange={handleQuantityChange} inventory={inventory} setInventory={setInventory}/>} />
      <Route path='/home/aboutUs' element={<AboutUs/>} />
      <Route path='/home/contactUs' element={<ContactUs/>} /> 
      <Route path='/home/paymentEntry' element={<PaymentEntry order={order} setOrder={setOrder} handleInputChange={handleInputChange}/>} />
      <Route path='/home/shippingEntry' element={<ShippingEntry handleInputChange={handleInputChange}/>} />
      <Route path='/home/viewOrder' element={<ViewOrder order={order} setOrderState={setOrderState}/>} />
      <Route path='/home/viewConfirmation' element={<ViewConfirmation orderState={orderState}/>} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
