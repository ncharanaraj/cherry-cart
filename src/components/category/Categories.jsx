import React, { useEffect } from "react";
import "./categories.css";
import { useProduct } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useProduct();

  useEffect(() => {
    dispatch({
      type: "CLEAR_FILTERS",
      payload: {
        categories: state.allCategories,
        products: state.products,
      },
    });
  }, [dispatch, state.allCategories, state.products]);

  return (
    <>
      <article className="about">
        <h2>Unleash Your Style & Tech Savvy</h2>
        <p>
          Explore Fashion, Electronics, and Jewelry Delights! Elevate your
          wardrobe with our trendy collections for men and women. Stay connected
          with cutting-edge electronics. Sparkle with our exquisite jewelry.
          Experience the perfect fusion of style and innovation in one
          destination!
        </p>
      </article>
      <section>
        <h3 className="category-heading">Shop by Category</h3>
        <div className="category-cards">
          {state.allCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch({
                  type: "CATEGORY",
                  payload: category,
                });
                window.scroll({ top: 0, behavior: "smooth" });
                navigate("/store");
              }}
              className="category-card"
            >
              <p className="category-card-title">{category}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
