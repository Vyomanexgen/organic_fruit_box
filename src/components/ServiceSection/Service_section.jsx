import { LuLeaf } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineShield } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import './service_section.css'

const Service_section = () => {
    return (
        <div className="service-section-container">
            <div className="headline-for-service-section">
                <div className="title-for-service">Why Choose
                    <div style={{ color: "green" }}>Organic Fruit Box</div>
                </div>
                <p>We're more than just a delivery service. We're your partners in healthy living, commited
                    to bringing you the highest quality organic produce.
                </p>
            </div>
            <div className="feature-cards-container">
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <LuLeaf className="feature-icon leaf" />
                    </div>
                    <span>100% Organic</span>
                    <p>All our fruits and vegetables are cretified organic,
                        grown without harmful pesticides or chemicals.
                    </p>

                </div>
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <FaRegHeart className="feature-icon leaf" />
                    </div>
                    <span>Locally Sourced</span>
                    <p>we partner with local farmers to bring you the freshest
                        produce while supporting our community.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <TbTruckDelivery className="feature-icon leaf" />
                    </div>
                    <span>Fresh Delivery</span>
                    <p>From farm to your doorstep in 24 hours. we ensure 
                        maximum freshness and nutritional value.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <MdOutlineShield  className="feature-icon leaf" />
                    </div>
                    <span>Quality Guaranteed</span>
                    <p>Not satisfied? We offer a 100% money-back guarantee on all our products.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <GoPeople  className="feature-icon leaf" />
                    </div>
                    <span>Family Owned</span>
                    <p>A family business with three generation of farming experience and 
                        passion for healthy living.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon-container">
                        <SlBadge  className="feature-icon leaf" />
                    </div>
                    <span>Award Winning</span>
                    <p>Recognized for excellence in organic farming and sustainable
                        business practices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Service_section