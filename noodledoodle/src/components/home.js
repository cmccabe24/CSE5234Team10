import React from "react";
import '../static/purchase.css';
import {Link} from "react-router-dom";


const Home = () => {


return (
    <div className="purchasePage">
        <nav className="navBar">
            <Link to="/home/purchase" className="navLink">Products</Link>
            <Link to="/home/aboutUs" className="navLink">About Us</Link>
            <Link to="/home/contactUs" className="navLink">Contact Us</Link>
        </nav>
    </div>
);
};

export default Home;