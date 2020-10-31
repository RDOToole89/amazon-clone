import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
      </main>
      <footer className="row center">All right reserved.</footer>
    </div>
  );
}

export default App;
