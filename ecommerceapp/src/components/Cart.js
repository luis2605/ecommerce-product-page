import React, { useState } from "react";
import classes from "../css/cart.module.css";
import sneakers from "../images/image-product-1-thumbnail.jpg";
import deleteBtn from "../images/icon-delete.svg";

const Cart = (props) => {
  const [cartContentShown, setCartContentShown] = useState(false);

  console.log(props);
  console.log(cartContentShown);
  const pcRabatt = () => {
    const result = (props.onData.normalPrice * props.onData.discount) / 100;
    return result.toFixed(2);
  };
  const addition = () => {
    const additionResult = pcRabatt() * props.onProductAmount;
    return additionResult.toFixed(2);
  };

  const cartReset = () => {
    props.onProductAmountReset(0);
    console.log(props);
  };
  const reducingLongNames = () => {
    let name = props.onData.name;
    if (name.length > 20) {
      return (name = `${name.slice(0, name.length - 10)}...`);
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}> Cart</h2>

      <p
        className={
          props.onProductAmount ? classes.invisible : classes["empty-cart"]
        }
      >
        The cart is sooo sad ...he is empty ... for now
      </p>

      <div
        className={
          props.onProductAmount ? classes["cart-container"] : classes.invisible
        }
      >
        <div className={classes["thumbnail-description-delete"]}>
          <img
            className={classes["thumbnail-photo"]}
            src={sneakers}
            alt="sneakers"
          />
          <div className={classes["description-price-total"]}>
            <p className={classes.gray}>{reducingLongNames()}</p>
            <div className={classes["price-total"]}>
              <p className={classes.gray}>{pcRabatt()} x</p>
              <p className={classes.amount}> {props.onProductAmount}</p>
              <p> {addition()}</p>
            </div>
          </div>
          <img onClick={cartReset} src={deleteBtn} alt="delete" />
        </div>
        <button onClick={cartReset} className={classes.btn}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
