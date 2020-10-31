import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";
import MessageBox from "../components/MessageBox/MessageBox";
import LoadingBox from "../components/LoadingBox/LoadingBox";

function HomePage() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/api/products");
        setLoading(false);
        setProductData(response);
      } catch (e) {
        console.log(e);
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("what is productData?", productData);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {productData.data?.map((product) => {
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
      )}
    </div>
  );
}

export default HomePage;
