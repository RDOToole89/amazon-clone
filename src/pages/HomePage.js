import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
// import axios from "axios";
import MessageBox from "../components/MessageBox/MessageBox";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomePage() {
  // REDUX MANAGED STATES
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());

    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("http://localhost:4000/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (e) {
    //     console.log(e);
    //     setError(e.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products?.map((product) => {
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
