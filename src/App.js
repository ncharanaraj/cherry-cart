import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductListing from "./pages/productlisting/ProductListing";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import SingleProduct from "./pages/singleproduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductListing />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
