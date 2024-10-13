import React from "react";
import '../static/home.css';
import {Link} from "react-router-dom";


const Home = () => {


return (
<>
        <nav className="navHomeBar">
            <Link to="/home/purchase" className="navHomeLink">Products</Link>
            <Link to="/home/aboutUs" className="navHomeLink">About Us</Link>
            <Link to="/home/contactUs" className="navHomeLink">Contact Us</Link>
        
        </nav>
        <div className="homePage">
        <img src="noodledoodlebanner.png" alt='banner' className="bannerImage"/>
    </div>
    </>
    
);
};

export default Home;