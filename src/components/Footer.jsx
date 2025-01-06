import React from 'react';
    import { Link } from 'react-router-dom';

    function Footer() {
      return (
        <footer className="footer">
          <div className="container">
            <nav>
              <Link to="/about">About Us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Fit Talks. All rights reserved.</p>
          </div>
        </footer>
      );
    }

    export default Footer;
