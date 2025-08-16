import organicFruitImg from '../../assets/organicFruit.jpg';
import { FaXmark } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = ({ slideBar, setSlideBar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={organicFruitImg} alt="Logo" />
            <span>ORGANIC FRUIT BOX</span>
          </div>

          <ul className="navbar-links">
            <Link to="home" className="style-link" smooth={true} duration={500} offset={-50}><li>Home</li></Link>
            <Link to="menu" className="style-link" smooth={true} duration={500}><li>Menu</li></Link>
            <Link to="priceBox" className="style-link" smooth={true} duration={500} offset={-80}><li>Plans</li></Link>
            <Link to="mission" className="style-link" smooth={true} duration={500} offset={-120}><li>About</li></Link>
            <Link to="reviews" className="style-link" smooth={true} duration={500} offset={-80}><li>Review</li></Link>
            <Link to="contact" className="style-link" smooth={true} duration={500} offset={-50}><li>Contact</li></Link>
          </ul>

          <div className="navbar-btns">
            <div className="slide-bar"
              onClick={() => setSlideBar(false)}
              style={{ display: !slideBar ? "none" : "block" }}
            ><IoReorderThreeOutline className="trible-bar"/></div>
            <div className="hide-slide-bar"
              onClick={() => setSlideBar(true)}
              style={{ display: slideBar ? "none" : "block" }}>
              <FaXmark className="x-mark"/></div>
          </div>
        </div>
      </nav>
      <ul className="slide-bar-container" style={{ left: !slideBar ? "0px" : "-60%"}}>
        <Link to="home" className="style-link" smooth={true} duration={500} offset={-50}><li>Home</li></Link>
        <Link to="menu" className="style-link" smooth={true} duration={500}><li>Menu</li></Link>
        <Link to="priceBox" className="style-link" smooth={true} duration={500} offset={-80}><li>Plans</li></Link>
        <Link to="mission" className="style-link" smooth={true} duration={500} offset={-120}><li>About</li></Link>
        <Link to="reviews" className="style-link" smooth={true} duration={500} offset={-80}><li>Review</li></Link>
        <Link to="contact" className="style-link" smooth={true} duration={500} offset={-50}><li>Contact</li></Link>
      </ul>
    </>
  )
}

export default Navbar;
