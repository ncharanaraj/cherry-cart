import React from "react";
import "./cartCard.css";

const CartCard = ({ cartProducts }) => {
  const { image, title, price } = cartProducts;
  return (
    <div>
      <div>
        <img src={image} alt="" style={{ width: "15rem" }} />
        <div>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
