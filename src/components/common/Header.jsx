import React from "react";
import "./header.css";
import {
  StorefrontOutlinedIcon,
  LoginOutlinedIcon,
  ShoppingCartOutlinedIcon,
  FavoriteBorderOutlinedIcon,
} from "../../assests/index";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import Search from "./search/Search";

const Header = () => {
  return (
    <>
      <div>
        <NavLink to="/" className="brand-name">
          <span>Cherry Cart</span>
        </NavLink>
      </div>
      <Search />
      <nav>
        <NavLink to="/store">
          <Tooltip title="Store" arrow>
            <StorefrontOutlinedIcon className="nav-icons" />
          </Tooltip>
        </NavLink>
        <NavLink to="/wishlist">
          <Tooltip title="Wishlist" arrow>
            <FavoriteBorderOutlinedIcon className="nav-icons" />
          </Tooltip>
        </NavLink>
        <NavLink to="/cart">
          <Tooltip title="Cart" arrow>
            <ShoppingCartOutlinedIcon className="nav-icons" />
          </Tooltip>
        </NavLink>
        <NavLink to="/login">
          <Tooltip title="Login" arrow>
            <LoginOutlinedIcon className="nav-icons" />
          </Tooltip>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
