import React from "react";
import "./priceBox.css";

const PriceBox = () => {
  return (
    <section className="price-section">
      <h2 className="heading">Organic Fruit Box</h2>
      <p className="tagline">Healthy Eating, Happy Living</p>

      <div className="price-container">
        {/* Large Box */}
        <div className="price-card">
          <h3>Large Size Box</h3>
          <p className="price">₹2200/-</p>
        </div>

        {/* Small Box */}
        <div className="price-card">
          <h3>Small Size Box</h3>
          <p className="price">₹1800/-</p>
        </div>
      </div>

      <div className="info-container">
        <p className="info">
          <strong>Free Delivery 🚴</strong> <br />
          Madhapur, Hi-tech City (10 km+ radius)
        </p>
        <p className="info">
          <strong>Timings:</strong> Morning 6am - 10am
        </p>
      </div>
    </section>
  );
};

export default PriceBox;
