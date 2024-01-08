import React from 'react';
import './Footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Bliss Basket</h3>
        <p>Your ultimate destination for trendy and fashionable clothing.</p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Yubi Apparels</a>
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
