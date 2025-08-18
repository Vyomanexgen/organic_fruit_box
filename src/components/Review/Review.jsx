import React from "react";
import "./review.css";
import { Star } from "lucide-react";


const reviews = [
  {
    name: "Samantha A",
    comment: "The fruits were so fresh and juicy! Loved the eco-friendly packaging. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    comment: "Great quality and quick delivery. Mangoes tasted like they were straight from the farm.",
    rating: 4,
  },
  {
    name: "Naveen Kumar",
    comment: "The fruit box was colorful and super fresh. My kids enjoyed the apples and grapes a lot!",
    rating: 5,
  },
  {
    name: "Karthik R",
    comment: "Affordable and organic. This is my third order and the consistency is amazing.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3 className="review-name">{review.name}</h3>
            </div>
            <p className="review-comment">{review.comment}</p>
            <div className="review-stars">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < review.rating ? "#facc15" : "none"} 
                  stroke={i < review.rating ? "#facc15" : "#d1d5db"} 
                  style={{ marginRight: "2px" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

