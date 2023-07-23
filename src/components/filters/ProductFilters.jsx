import React, { useContext } from "react";
import "./productFilters.css";
import { ProductContext } from "../../contexts/ProductContext";

const ProductFilters = () => {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.sortByPrice);
  return (
    <>
      <div className="filter-heading">
        <div>
          <h4>Filters</h4>
        </div>
        <div>
          <button>CLEAR</button>
        </div>
      </div>

      <div className="filter-wrapper">
        <p>Sort By</p>
        <div className="filter-items">
          <label htmlFor="lowtohigh">
            <input
              type="radio"
              name="sortby-price"
              id="lowtohigh"
              value="lowtohigh"
              onChange={(e) =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: e.target.value,
                })
              }
              checked={state.sortByPrice === "lowtohigh"}
            />
            <span>Price = Low to High</span>
          </label>
          <label htmlFor="hightolow">
            <input
              type="radio"
              name="sortby-price"
              id="hightolow"
              value="hightolow"
              onChange={(e) =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: e.target.value,
                })
              }
              checked={state.sortByPrice === "hightolow"}
            />
            <span>Price = High to Low</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
