import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h3 className="empty-cart">is empty</h3>
        </header>
      </section>
    );
  }
  return (
    <div>
      <section className="cart">
        <header>
          <h2>Your Bage</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total<span>{total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </footer>
      </section>
    </div>
  );
};

export default CartContainer;
