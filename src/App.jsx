import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import ProductsListing from "./components/productListing/ProductListing";
// import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Profile from "./components/profile/Profile";
import Cart from "./components/cart/Cart";
import WishlistPage from "./components/wishlist/WishlistPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Private Routes */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
