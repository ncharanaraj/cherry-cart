import "./App.css";
import ProductListing from "./components/productListing/ProductListing";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="app">
      <ProductListing />
      <ProductDetails />
      <Cart />
    </div>
  );
}

export default App;
