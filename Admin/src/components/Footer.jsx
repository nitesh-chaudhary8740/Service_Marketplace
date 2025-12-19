import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/faq">FAQ</a>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="social-media">
                <span className="icon">f</span>
                <span className="icon">t</span>
                <span className="icon">i</span>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Service Marketplace.</p>
        </footer>
    );
};

export default Footer;