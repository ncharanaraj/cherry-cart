import React from "react";
import "./search.css";
import { SearchOutlinedIcon } from "../../../assests/index";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContext";

const Search = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useProduct();

  return (
    <div className="search">
      <SearchOutlinedIcon />
      <input
        type="search"
        placeholder="Search"
        name="search"
        value={state.search}
        onChange={(e) => {
          dispatch({
            type: "SEARCH",
            payload: e.target.value,
          });
          navigate("/store");
        }}
      />
    </div>
  );
};

export default Search;
