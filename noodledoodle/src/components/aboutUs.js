import React from 'react';
import { Link } from "react-router-dom";
import '../static/aboutUs.css'; // Assuming your CSS is stored here

const AboutUs = () => {
    return (
       <>
       <nav className="navBar">
                <Link to="/home" className="navLink">Home</Link>
            </nav>
        <div className="aboutUs">
            
            <img src="/about1.png" alt='aboutus' className='aboutUsImage'/>
            <img src="/about2.png" alt='aboutus'className='aboutUsImage'/>
            <img src="/about3.png" alt='aboutus'className='aboutUsImage'/>
            <img src="/about4.png" alt='aboutus'className='aboutUsImage'/>
        
        </div>
        </> 
    );
};

export default AboutUs;
