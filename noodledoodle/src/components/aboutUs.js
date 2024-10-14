import React from 'react';
import { Link } from "react-router-dom";
import '../static/aboutUs.css'; // Assuming your CSS is stored here

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <nav className="navBar">
                <Link to="/home" className="navLink">Home</Link>
            </nav>
            <img src="/about1.png" alt='aboutus'/>
            <img src="/about2.png" alt='aboutus'/>
            <img src="/about3.png" alt='aboutus'/>
            <img src="/about4.png" alt='aboutus'/>
        
        </div>
    );
};

export default AboutUs;
