//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/home";
import Purchase from "./components/purchase";
import PaymentEntry from "./components/paymentEntry";
import ShippingEntry from "./components/shippingEntry";
import ViewOrder from "./components/viewOrder";
import ViewConfirmation from "./components/viewConfirmation";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";


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

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setOrder((order) => ({
    ...order,
    [name]: value,
  }));
};

  return (
    <div className="App">
    <Router>
      <div className="content">
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home/purchase' element={<Purchase order={order} setOrder={setOrder} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} handleQuantityChange={handleQuantityChange} />} />
      <Route path='/home/aboutUs' element={<AboutUs/>} />
      <Route path='/home/contactUs' element={<ContactUs/>} /> 
      <Route path='/home/paymentEntry' element={<PaymentEntry order={order} setOrder={setOrder} handleInputChange={handleInputChange}/>} />
      <Route path='/home/shippingEntry' element={<ShippingEntry handleInputChange={handleInputChange}/>} />
      <Route path='/home/viewOrder' element={<ViewOrder order={order} setOrder={setOrder}/>} />
      <Route path='/home/viewConfirmation' element={<ViewConfirmation order={order}/>} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
