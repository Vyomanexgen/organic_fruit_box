import './contact.css'
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  return (
    < section className="contact-section" >
      <div className="about-headline">
        <div className="about-title">
          Get in Touch
        </div>
        <p>Ready to start your organic journey? Fill out the form below with us directly</p>
      </div>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send us an Inquiry</h2>
            <p>
              Tell us about your preferences and we’ll create the perfect subscription for you
            </p>
            <form>
              <div className="filling-options">
                <div className="input-container"> Full Name * <input type="text" placeholder="Your full name" required /></div>
                <div className="input-container"> Email Address *<input type="email" placeholder="youremail@example.com" required /></div>
                <div className="input-container"> Phone Number<input type="tel" placeholder="+91 1234567890" /></div>
                <div className="input-container"> Preferred Plan<select>
                  <option>Select a plan</option>
                  <option>Small Box</option>
                  <option>Large Box</option>
                </select></div>
              </div>
              <div className="textarea-container">Message
                <textarea
                  placeholder="Tell us about your dietary preferences, delivey schedule, or any special requirements...">
                </textarea>
              </div>
              <button type="submit" className="btn-primary">Send Inquiry</button>
            </form>
          </div>

          <div className="contact-information-container">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p><BsTelephoneOutbound /> +91 76610 31896</p>
              <p><IoMailOutline /> hello@organicfruitbox.com</p>
              <p><HiOutlineLocationMarker /> Madhapur, Hyderabad, 500032.</p>
            </div>

            <div className="whatsapp-box">
              <FaWhatsapp className="whatsapp-icon" />
              <h3>Chat with us on WhatsApp</h3>
              <p>Get instant answers to your questions and personalized recommendations</p>
              <a 
                href="https://wa.me/message/4NWB5FRP3RIZI1" 
                className="btn-whatsapp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" /> Start WhatsApp Chat
              </a>
            </div>

            <div className="doubt-clarification-box">
              <h3>Why choose Organic Fruit Box?</h3>
              <ul>
                <li>100% certified organic produce</li>
                <li>Locally sourced when possible</li>
                <li>Zero plastic packaging</li>
                <li>Flexible delivery schedules</li>
                <li>Money-back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
    </section >


  )
}

export default Contact