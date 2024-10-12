//import logo from './logo.svg';
import './App.css';
import React from "react";
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
  return (
    <div className="App">
    <Router>
      <div className="content">
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home/purchase' element={<Purchase/>} />
      <Route path='/home/aboutUs' element={<AboutUs/>} />
      <Route path='/home/contactUs' element={<ContactUs/>} /> 
      <Route path='/home/paymentEntry' element={<PaymentEntry/>} />
      <Route path='/home/shippingEntry' element={<ShippingEntry/>} />
      <Route path='/home/viewOrder' element={<ViewOrder/>} />
      <Route path='/home/viewConfirmation' element={<ViewConfirmation/>} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
