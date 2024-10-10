import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
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
      <Route path='/purchase' element={<Purchase/>} />
      <Route path="/" element={<Navigate replace to="/purchase" />} />
      <Route path='/purchase/aboutUs' element={<AboutUs/>} />
      <Route path='/purchase/contactUs' element={<ContactUs/>} /> 
      <Route path='/purchase/paymentEntry' element={<PaymentEntry/>} />
      <Route path='/purchase/shippingEntry' element={<ShippingEntry/>} />
      <Route path='/purchase/viewOrder' element={<ViewOrder/>} />
      <Route path='/purchase/viewConfirmation' element={<ViewConfirmation/>} />
      <Route path='/purchase/aboutUs' element={<AboutUs/>} />
      <Route path='/purchase/contactUs' element={<ContactUs/>} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
