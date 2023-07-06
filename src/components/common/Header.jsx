import React from "react";
import "./header.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import {
  FavoriteBorderOutlinedIcon,
  PermIdentityOutlinedIcon,
  SearchOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "../../asset/index";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-left">
        <p className="brand-name" onClick={() => navigate("/")}>
          CHERRY 🛒
        </p>
        <Link to="/products" className="shop-now">
          Shop Now
        </Link>
      </div>

      <div className="header-right">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search items"
            className="search-input"
          />
          <button>
            <SearchOutlinedIcon />
          </button>
        </div>
        <nav>
          <NavLink to="/profile">
            <PermIdentityOutlinedIcon />
          </NavLink>
          <NavLink to="/wishlist">
            <FavoriteBorderOutlinedIcon />
          </NavLink>
          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
