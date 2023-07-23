import React from "react";
import "./search.css";
import { SearchOutlinedIcon } from "../../../assests/index";

const Search = () => {
  return (
    <div className="search">
      <SearchOutlinedIcon />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
