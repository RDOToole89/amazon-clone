import React from "react";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { id, name, image, price, rating, numReviews } = props;
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img className="medium" src={image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
