import './mission.css'
import { FaPlus } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="mission-container">
        <div className="headline-for-mission">
            <span>Our Mission: </span>
            <span style={{color:"green"}}>Healthy Living Made Simple</span>
        </div>
        <p>At Organic Fruit Box, we believe that eating healthy shouldn't be complicated or time-consuming.
            That's why we've created a simple subscription service that delivers the freshest, most nutritious
            organic fruits and salads directly to your home. Every box is carefully curated by our nutrition 
            experts and sourced from certified organic farms.
        </p>
        <div className="consumed-counts-container">
             <div className="customers">
               <div> <span>500</span><FaPlus className="plus-icon"/></div>
               <div>Happy Customers</div>
             </div>
             <div className="customers">
              <div> <span>50</span><FaPlus className="plus-icon"/></div>
               <div>Partner Farms</div>
             </div>
             <div className="customers">
               <div><span>10k</span><FaPlus className="plus-icon"/></div>
               <div>Boxes Delivered</div>
             </div>
        </div>
    </div>
  )
}

export default Mission