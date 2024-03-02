import React from 'react';
import './Footer.css'; // Make sure this path is correct

const Footer = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'Twitter', icon: 'fab fa-twitter' },
    { name: 'Google Plus', icon: 'fab fa-google-plus' },
    { name: 'YouTube', icon: 'fab fa-youtube' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
  ];

  return (
    <footer>
      <div className="footer-content">
        <h3>Bliss Basket</h3>
        <p>Your ultimate destination for trendy and fashionable clothing.</p>
        <ul className="socials">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={`#${link.name.toLowerCase()}`} rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="/" rel="noopener noreferrer">Yubi Apparels</a>
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="/" rel="noopener noreferrer">Home</a>
            </li>
            <li>
              <a href="/" rel="noopener noreferrer">About</a>
            </li>
            <li>
              <a href="/" rel="noopener noreferrer">Contact</a>
            </li>
            <li>
              <a href="/" rel="noopener noreferrer">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
