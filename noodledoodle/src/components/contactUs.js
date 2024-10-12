import React from 'react';
import {Link} from "react-router-dom";
import '../static/contactUs.css';

const ContactUs = () => {
    return (
        <div className="contactUs">
            <nav className="navBar">
                <Link to="/home" className="navLink">Home</Link>
            </nav>
            <h1 className="header">About Us</h1>
            <p>At noodledoodle, we’re passionate about bringing you unique, noodle-themed products! From Art Prints to Candles, Stickers, Mugs, and T-shirts, we combine fun and creativity to give you high-quality, quirky products that spark joy in your everyday life.</p>
            <p>Founded in 2024, our mission is to celebrate the simplicity of noodles through art and design, and we are committed to delivering products you’ll love!</p>
            
            <h2 className="section-header">Contact Us</h2>
            <p>If you have any questions, concerns, or need after-sale support, we’re here to help!</p>
            
            <div className="contact-info">
                <h3>How to Reach Us</h3>
                <ul>
                    <li>Email: support@noodledoodle.com</li>
                    <li>Phone: (123) 456-7890 (Mon-Fri, 9 AM - 5 PM EST)</li>
                    <li>Address: 123 Noodle Street, Pasta City, NY 10001</li>
                </ul>
            </div>

            <h3 className="section-header">Support for Returns, Issues, or Help</h3>
            <p>At noodledoodle, customer satisfaction is our top priority! If you're not completely satisfied with your purchase, or if there are any issues with your order, feel free to contact us.</p>
            <p>For returns or exchanges, please reach out within 30 days of receiving your product. We’ll provide you with a return label, and you’ll receive a full refund or an exchange, depending on your preference.</p>

            <div className="faq">
                <h3 className="section-header">FAQ</h3>
                <ul>
                    <li><strong>What is your return policy?</strong> We offer hassle-free returns within 30 days of purchase for any product in its original condition.</li>
                    <li><strong>How long does shipping take?</strong> Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout.</li>
                    <li><strong>Can I cancel my order?</strong> Orders can be canceled within 24 hours of purchase. Please contact us at support@noodledoodle.com to process cancellations.</li>
                    <li><strong>What payment methods do you accept?</strong> We accept all major credit cards, PayPal, and select cryptocurrency options.</li>
                </ul>
            </div>

            <br></br>
            <div className="footer">
                <h2>We look forward to serving you and helping you enjoy our noodledoodle creations!</h2>
            </div>
        </div>
    );
};

export default ContactUs;
