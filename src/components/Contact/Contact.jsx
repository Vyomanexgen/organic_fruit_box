import './contact.css'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: ""
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, plan, message } = formData;

    // Build WhatsApp text
    const text = `Hello, I would like to make an inquiry:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Plan: ${plan}
- Message: ${message}`;

    
    const whatsappNumber = "919912569025"; // change if needed

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section">
      {/* Headline */}
      <div className="about-headline">
        <div className="about-title">
          Get in&nbsp;
          <div style={{ color: "green", display: "inline" }}>Touch</div>
        </div>
        <p>
          Ready to start your organic journey? Fill out the form below or get in
          touch with us directly.
        </p>
      </div>

      {/* Main Container */}
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us an Inquiry</h2>
          <p>
            Tell us about your preferences and we’ll create the perfect subscription for you
          </p>

          <form onSubmit={handleSubmit}>
            <div className="filling-options">
              <div className="input-container">
                Full Name * 
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name" 
                  required 
                />
              </div>

              <div className="input-container">
                Email Address 
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com" 
                />
              </div>

              <div className="input-container">
                Phone Number 
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890" 
                />
              </div>

              <div className="input-container-dropdown">
                Preferred Plan *
                <select 
                  className="dropdown-selection" 
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a plan
                  </option>
                  <option value="Small Box">Small Box</option>
                  <option value="Large Box">Large Box</option>
                </select>
              </div>
            </div>

            <div className="textarea-container">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dietary preferences, delivery schedule, or any special requirements..."
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Inquiry via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-information-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><BsTelephoneOutbound /> +91 76610 31896</p>
            <p><IoMailOutline /> hello@organicfruitbox.com</p>
            <p><HiOutlineLocationMarker /> Madhapur, Hyderabad, 500032</p>
          </div>

          {/* WhatsApp Section */}
          <div className="whatsapp-box">
            <FaWhatsapp className="whatsapp-icon" />
            <h3>Chat with us on WhatsApp</h3>
            <p>Get instant answers to your questions and personalized recommendations</p>
            <a 
              href="https://wa.me/919912569025?text=Hello%2C%20Organic%20Fruit%20Box%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services%20and%20plans.%20Please%20guide%20me%20with%20the%20details.%20" 
              className="btn-whatsapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" /> Start WhatsApp Chat
            </a>
          </div>

          {/* Why Choose Section */}
          <div className="doubt-clarification-box">
            <h3>Why choose Organic Fruit Box?</h3>
            <ul>
              <li>100% certified organic produce</li>
              <li>Locally sourced when possible</li>
              <li>Quality Guaranteed Fruit Box</li>
              <li>Flexible delivery schedules</li>
              <li>Family-Owned Business</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
