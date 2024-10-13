import React from "react";
//import '../static/home.css';
import {Link} from "react-router-dom";


const Home = () => {

return (
<>
        <nav className="navBar">
            <Link to="/home/purchase" className="navLink">Products</Link>
            <Link to="/home/aboutUs" className="navLink">About Us</Link>
            <Link to="/home/contactUs" className="navLink">Contact Us</Link>
        
        </nav>
        <div className="page">
        <img src="noodledoodlebanner.png" alt='banner' className="bannerImage"/>
    </div>
    </>
    
);
};

export default Home;