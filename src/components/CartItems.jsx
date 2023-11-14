import { useDispatch, useSelector } from "react-redux";
import "./cartItems.css";
import {
  decrement,
  increment,
  initialized_cart,
  removeProduct,
} from "../features/cartSlice";
import { useEffect } from "react";

const CartItems = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log("Hello");
  //     const storedCartData = localStorage.getItem("cart");
  //     if (storedCartData) {
  //       const cartDataFromStorage = JSON.parse(storedCartData);
  //       dispatch(initialized_cart(cartDataFromStorage));
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cartData));
  //   }, [cartData]);

  return (
    <div className="cart-container">
      <div>
        {cartData?.map((item) => {
          return (
            <div className="cart-items" key={item.id}>
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text">{item.name}</div>
              <div className="price-tag">{item.price}</div>
              <div className="buttons">
                <button
                  className="plus"
                  onClick={() => dispatch(increment(item.id))}
                >
                  +
                </button>
                <div className="quantity">{item.qty}</div>

                <button
                  className="minus"
                  onClick={() =>
                    item.qty > 1 ? dispatch(decrement(item.id)) : item
                  }
                >
                  -
                </button>
                <button
                  className="remove"
                  onClick={() => dispatch(removeProduct(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
