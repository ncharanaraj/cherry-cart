import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { useCart } from "../../contexts/CartContext";
import CartCard from "../../components/cartcard/CartCard";

const Cart = () => {
  const {
    cartState: { cart },
    cartTotal,
    totalPriceWithoutDeliveryCharge,
  } = useCart();

  document.title = "Cart | Cherry Cart";

  return (
    <section>
      <h3>My Cart({cart.length})</h3>
      {cart.length > 0 ? (
        <div className="cart-page-container">
          <div className="cart-items-container">
            {cart.map((cartitem) => (
              <CartCard key={cartitem.id} cartProducts={cartitem} />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <hr style={{ marginBlock: "0.5rem" }} />
            <div>
              Price ({cart.length} items): ₹{totalPriceWithoutDeliveryCharge}
            </div>
            <div>Delivery Charge: ₹40</div>
            <hr style={{ marginBlock: "0.5rem" }} />
            <div>Payable Total Amount: ₹{cartTotal}</div>
            <button className="checkout-button">Checkout</button>
          </div>
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
