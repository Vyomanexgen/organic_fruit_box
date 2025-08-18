import organicFruitImg from '../../assets/Hero.png';
import "./hero_section.css";
import { TiArrowRight } from "react-icons/ti";
import { LuLeaf } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-scroll'

const Hero_section = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                        Fresh <span style={{ color: "green" }}>Organic</span> Fruits & Bowls
                    </h1>
                    <h1 className="delivery">Delivered Daily</h1>
                    <p>Nourish your body with our carefully curated selection of orgain fruits and healthy salad bowls.
                        Fresh, local, and delivered right to your doorstep.</p>
                    <div className="hero-btns">
                        <Link to="priceBox" className="link-btn" smooth={true} duration={500} offset={-100}>
                            <button className="start-sub-btn"
                            >Start Your Subscription <TiArrowRight className="right-arrow" />
                            </button>
                        </Link>
                        <Link to="services" className="link-btn" smooth={true} duration={500} offset={-100}>
                            <button className="learn-more-btn">Learn More</button>
                        </Link>
                    </div>
                    <div className="hero-icons">
                        <div><LuLeaf className="hero-icon leaf" /> <span>100% Organic</span></div>
                        <div><FaRegHeart className="hero-icon heart" /> <span>Locally Sourced</span></div>
                        <div><TbTruckDelivery className="hero-icon delivery" /> <span>Fresh Daily</span></div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="leaf-icon-container"><LuLeaf className="leaf-icon-for-image" /></div>
                    <div className="hero-img-container"><img src={organicFruitImg} alt="Fresh Organic Fruits" /></div>
                    <div className="customer-count">
                        <div className="count-container"><span>500</span><FaPlus className="plus-icon" /></div>
                        <div>Happy Customers</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero_section


