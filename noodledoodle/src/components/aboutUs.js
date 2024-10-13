import React from 'react';
import { Link } from "react-router-dom";
import '../static/aboutUs.css'; // Assuming your CSS is stored here

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <nav className="navBar">
                <Link to="/home" className="navLink">Home</Link>
            </nav>

            <h1 className="header">About NoodleDoodle</h1>

            {/* Company mission, vision, and strategy */}
            <section className="company-section">
                <h2>Our Mission</h2>
                <p>At NoodleDoodle, we strive to provide our customers with creative, high-quality, and innovative noodle-themed products that bring joy and a touch of fun into everyday life.</p>

                <h2>Our Vision</h2>
                <p>We aim to become the go-to brand for noodle-themed art and merchandise, spreading the love for noodles to every household.</p>

                <h2>Our Strategy</h2>
                <p>Our strategy is built on a foundation of customer-centric innovation, high-quality design, and a commitment to fostering creativity within our products. We leverage our team's frontend and backend development expertise to create an outstanding user experience.</p>
            </section>

            {/* Meet our Executives */}
            <section className="executives-section">
                <h2>Meet Our Executives</h2>
                <div className="executives">
                    {/* Executive 1 */}
                    <div className="executive-card">
                        <h3>Ryan Greene</h3>
                        <h4>____ & Co-Founder</h4>
                        <p>Add info here</p>
                    </div>

                    {/* Executive 2 */}
                    <div className="executive-card">
                        <img src="/nishtha.jpg" alt="Nishtha Jindal" className="executive-image" />
                        <h3>Nishtha Jindal</h3>
                        <h4>___ & Co-Founder</h4>
                        <p>Nishtha Jindal is a senior at The Ohio State University, studying Computer Science and Engineering with a minor in Math. She has experience working as a Software Engineer intern and Product Management intern, contributing to several projects. Her expertise lies in backend technologies, including Go, Python, and Java, and she has a passion for building scalable systems.</p>
                    </div>

                    {/* Executive 3 */}
                    <div className="executive-card">
                        <h3>Caleb McCabe</h3>
                        <h4>___ & Co-Founder</h4>
                        <p>Add info here</p>
                    </div>

                    {/* Executive 4 */}
                    <div className="executive-card">
                        <h3>Mohisha Patel</h3>
                        <h4>____ & Co-Founder</h4>
                        <p>Add info here</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
