import React from "react";
import "./productFilters.css";
import { useProduct } from "../../contexts/ProductContext";
import { GradeIcon } from "../../assests";

const ProductFilters = () => {
  const { state, dispatch } = useProduct();

  const productCategories = state.products.reduce(
    (acc, { category }) =>
      acc.includes(category) ? [...acc] : [...acc, category],
    []
  );
  return (
    <>
      <div className="filter-heading">
        <div>
          <h4>Filters</h4>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({
                type: "CLEAR_FILTERS",
                payload: {
                  products: state.products,
                  categories: state.allCategories,
                },
              });
            }}
          >
            CLEAR
          </button>
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
        </div>
        <div className="filter-items">
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

      <div className="filter-wrapper">
        <p>Rating</p>
        <div className="filter-items">
          <div className="filter-rating-stars">
            <span>
              1 <GradeIcon sx={{ color: "var(--warning-color)" }} />
            </span>
            <span>
              5 <GradeIcon sx={{ color: "var(--warning-color)" }} />
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            list="rating-list"
            value={state.ratingRange}
            onChange={(e) => {
              dispatch({
                type: "SORT_BY_RATING",
                payload: e.target.value,
              });
            }}
          />
          <datalist id="rating-list">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </datalist>
        </div>
      </div>

      <div className="filter-wrapper">
        <p>Categories</p>
        <div>
          {productCategories.map((category, id) => (
            <div className="filter-items" key={id}>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={(event) =>
                    dispatch({
                      type: "CATEGORY",
                      payload: event.target.value,
                    })
                  }
                  checked={state.categories.includes(category)}
                />
                <span>{category}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
