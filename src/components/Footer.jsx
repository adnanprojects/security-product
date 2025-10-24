import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faTwitter, 
    faLinkedinIn, 
    faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><Link to="/about">About Company</Link></li>
                            <li><Link to="/about_us">Why Choose Us</Link></li>
                            <li><Link to="/">Our Products</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Products & Services */}
                    <div className="footer-section">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Security Solutions</a></li>
                            <li><a href="#">Network Protection</a></li>
                            <li><a href="#">Data Security</a></li>
                            <li><a href="#">Cloud Security</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/user/queries">Help Center</Link></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">System Status</a></li>
                            <li><a href="#">Report Issue</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <p>123 Security Street</p>
                            <p>Tech Valley, CA 94043</p>
                            <p>Email: info@securetech.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SecureTech Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;