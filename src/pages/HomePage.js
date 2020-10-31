import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import data from "../data";

function HomePage() {
  return (
    <div className="row center">
      {data.products.map((product) => {
        return (
          <ProductCard
            id={product._id}
            key={product._id}
            rating={product.rating}
            name={product.name}
            image={product.image}
            price={product.price}
            numReviews={product.numReviews}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
