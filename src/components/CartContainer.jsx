import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
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
              total<span>{total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            Clear Cart
          </button>
        </footer>
      </section>
    </div>
  );
};

export default CartContainer;
