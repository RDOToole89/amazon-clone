import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                rating={product.rating}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </div>
      </main>
      <footer className="row center">All right reserved.</footer>
    </div>
  );
}

export default App;
