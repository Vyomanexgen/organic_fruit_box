import React from "react";
import "./review.css";

const reviews = [
  {
    name: "Samantha Green",
    comment: "The fruits were so fresh and juicy! Loved the eco-friendly packaging. Will definitely order again.",
    rating: 5,
    date: "August 10, 2025",
  },
  {
    name: "Arjun Patel",
    comment: "Great quality and quick delivery. Mangoes tasted like they were straight from the farm.",
    rating: 4,
    date: "August 12, 2025",
  },
  {
    name: "Emily Johnson",
    comment: "The fruit box was colorful and super fresh. My kids enjoyed the apples and grapes a lot!",
    rating: 5,
    date: "August 14, 2025",
  },
  {
    name: "Karthik R",
    comment: "Affordable and organic. This is my third order and the consistency is amazing.",
    rating: 5,
    date: "August 15, 2025",
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
              <span className="review-date">{review.date}</span>
            </div>
            <p className="review-comment">{review.comment}</p>
            <div className="review-stars">
              {Array(review.rating)
                .fill("⭐")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

