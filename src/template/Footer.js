import React from 'react';
import '../assets/style/Footer.css';

function Footer() {

  


  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-content-section">
                <p>Help & Information</p>
                <a href="#">Help</a>
                <a href="#">Track Order</a>
                <a href="#">Delivery & Returns</a>
                <a href="#">Privacy & Cookies</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="footer-content-section">
                <p>About Mayy Collection</p>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="footer-content-section">
                <p>Connect with us</p>
                <div className="social-media">
                    <a href="#" className="social-media-image">
                        <img src={process.env.PUBLIC_URL+'/images/twitter.svg'} alt="shoe2" />
                    </a>
                    <a href="#" className="social-media-image">
                        <img src={process.env.PUBLIC_URL+'/images/instagram.svg'} alt="shoe2" />
                    </a>
                    <a href="#" className="social-media-image">
                        <img src={process.env.PUBLIC_URL+'/images/facebook.svg'} alt="shoe2" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-developed">
            <p>Developed by <a href="#">Farouk Bakre</a></p>
        </div>
    </div>
    );
}

export default Footer;
