import React from "react";
import { Link } from "react-router-dom";
import "./Product_Card.css";

const ProductsCard = ({ id, image, name, price, originalPrice, rating, reviews }) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="card">
      <Link to={`product/${id}`} className="image">
        <img src={image} alt={name} />
      </Link>

      <div className="content">
        <h2 className="product_name">{name}</h2>

        <div className="price">
          <h3>${price.toFixed(2)}</h3>
          {originalPrice && (
            <div className="discount">
              <h4 className="discount_price">${originalPrice.toFixed(2)}</h4>
              <span className="discount_percent">-{discount}%</span>
            </div>
          )}
        </div>

        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="star">
              {index < rating ? "★" : "☆"}
            </span>
          ))}
          <span className="reviews">({reviews})</span>
        </div>

        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsCard;