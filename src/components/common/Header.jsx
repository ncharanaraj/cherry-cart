import React from "react";
import "./header.css";
import {
  SearchOutlinedIcon,
  StorefrontOutlinedIcon,
  LoginOutlinedIcon,
} from "../../assests/index";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  return (
    <>
      <div>
        <span className="brand-name">Cherry Cart</span>
      </div>
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search" />
      </div>
      <nav>
        <Tooltip title="Store" arrow>
          <IconButton>
            <StorefrontOutlinedIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Login" arrow>
          <IconButton>
            <LoginOutlinedIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
        </Tooltip>
      </nav>
    </>
  );
};

export default Header;
