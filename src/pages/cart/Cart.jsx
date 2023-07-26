import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { CartContext } from "../../contexts/CartContext";
import CartCard from "../../components/cartcard/CartCard";

const Cart = () => {
  const {
    cartState: { cart },
  } = useContext(CartContext);

  console.log(cart);

  document.title = "Cart | Cherry Cart";

  return (
    <section>
      <h3>My Cart({cart.length})</h3>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <CartCard cartProducts={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div>
          <p>Oops! Your cart is empty.</p>
          <button>
            <Link to="/store">Explore the store</Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
