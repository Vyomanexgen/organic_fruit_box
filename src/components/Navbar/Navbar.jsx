import { useEffect, useRef } from "react";
import organicFruitImg from '../../assets/organicFruit.jpg';
import { FaXmark } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = ({ slideBar, setSlideBar }) => {
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && slideBar === false) {
        setSlideBar(true);
      }
    };

    const handleScroll = () => {
      if (slideBar === false) {
        setSlideBar(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slideBar, setSlideBar]);

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
            <div className="slide-bar" onClick={() => setSlideBar(!slideBar)}>
              {slideBar ? <IoReorderThreeOutline className="trible-bar"/> : <FaXmark className="x-mark"/>}
            </div>
          </div>
        </div>
      </nav>

      <ul 
        ref={sidebarRef}
        className="slide-bar-container" 
        style={{ left: !slideBar ? "0" : "-100%" }}
      >
        <Link to="home" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500} offset={-50}><li>Home</li></Link>
        <Link to="menu" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500}><li>Menu</li></Link>
        <Link to="priceBox" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500} offset={-80}><li>Plans</li></Link>
        <Link to="mission" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500} offset={-120}><li>About</li></Link>
        <Link to="reviews" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500} offset={-80}><li>Review</li></Link>
        <Link to="contact" onClick={() => setSlideBar(true)} className="style-link" smooth={true} duration={500} offset={-50}><li>Contact</li></Link>
      </ul>
    </>
  );
};

export default Navbar;
