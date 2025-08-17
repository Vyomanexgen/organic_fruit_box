import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";
import "./footer.css";
import { Link } from 'react-scroll'
import organicFruitImg from '/organicFruit.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-col footer-logo-col">
          <h3 className="footer-logo"> <img src={organicFruitImg} alt="Logo" className="footer-logo-img"/> ORGANIC FRUIT BOX</h3>
          <p>
            Fresh, organic fruits and salads delivered to your doorstep.
            Healthy living made simple.
          </p>
          <div className="social-icons">
            <a href="https://wa.me/919912569025?text=Hello%2C%20Organic%20Fruit%20Box%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services%20and%20plans.%20Please%20guide%20me%20with%20the%20details.%20"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/organic_fruitbox?utm_source=qr&igsh=ZWs2YjhvOG96czEx"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <Link to="home" className="footer-link" smooth={true} duration={500} offset={-50}><li>Home</li></Link>
            <Link to="priceBox" className="footer-link" smooth={true} duration={500} offset={-100}><li>Plans</li></Link>
            <Link to="mission" className="footer-link" smooth={true} duration={500} offset={-120}><li>About Us</li></Link>
            <Link to="contact" className="footer-link" smooth={true} duration={500} offset={-50}><li>Contact Us</li></Link>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="https://wa.me/919912569025?text=Hello%20👋%2C%20I%20have%20a%20question%20regarding%20Organic%20Fruit%20Box.%20Could%20you%20please%20help%20me%20with%20more%20details%3F">FAQ</a></li>
            <li><a href="https://wa.me/919912569025?text=Hello%20👋%2C%20I%20would%20like%20to%20know%20about%20the%20delivery%20details%20for%20Organic%20Fruit%20Box.%20Can%20you%20please%20share%20the%20information%3F">Delivery Info</a></li>
            <li><a href="https://wa.me/919912569025?text=Hello%20👋%2C%20I%20would%20like%20to%20know%20about%20the%20return%20and%20refund%20policy%20for%20Organic%20Fruit%20Box.%20Could%20you%20please%20share%20the%20details%3F">Return Policy</a></li>
            <li><a href="https://wa.me/919912569025?text=Hello%20👋%2C%20I%20would%20like%20to%20know%20about%20the%20privacy%20policy%20of%20Organic%20Fruit%20Box.%20Could%20you%20please%20share%20the%20details%3F">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col footer-cont">
          <h4>Contact Info</h4>
          <p><BsTelephoneOutbound /> +91 76610 31896</p>
          <p><IoMailOutline /> hello@organicfruitbox.com</p>
          <p><HiOutlineLocationMarker /> Madhapur, Hyderabad</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Organic Fruit Box. All rights reserved. Made with ❤️ for healthy living.</p>
      </div>
    </footer>
  );
}
