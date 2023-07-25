import React, { useContext } from "react";
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
import { Badge } from "@mui/material";
import { WishListContext } from "../../contexts/WishListContext";

const Header = () => {
  const {
    wishlistState: { wishlist },
  } = useContext(WishListContext);

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
            <StorefrontOutlinedIcon
              // className="nav-icons"
              color="var(--primary-color)"
            />
          </Tooltip>
        </NavLink>
        <NavLink to="/wishlist">
          <Tooltip title="Wishlist" arrow>
            <Badge badgeContent={wishlist.length} color="error">
              <FavoriteBorderOutlinedIcon
                // className="nav-icons"
                color="var(--primary-color)"
              />
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/cart">
          <Tooltip title="Cart" arrow>
            <ShoppingCartOutlinedIcon
              color="var(--primary-color)"
              // className="nav-icons"
            />
          </Tooltip>
        </NavLink>
        <NavLink to="/login">
          <Tooltip title="Login" arrow>
            <LoginOutlinedIcon
              color="var(--primary-color)"
              // className="nav-icons"
            />
          </Tooltip>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
