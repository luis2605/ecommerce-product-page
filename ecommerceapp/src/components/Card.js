import React, { useState } from "react";
import classes from "../css/card.module.css";
import cart from "../images/icon-cart.svg";

const Card = (props) => {
  const discountedPrice = () => {
    const value = (props.data.normalPrice * props.data.discount) / 100;
    return value.toFixed(2);
  };
  const [result, setResult] = useState(0);
  const add = () => {
    setResult((result) => {
      return result + 1;
    });
  };
  const substract = () => {
    if (result > 0) {
      setResult((result) => {
        return result - 1;
      });
    }
  };

  const addToCart = () => {
    props.onProductAmount(result);
  };

  console.log(props);
  return (
    <div className={classes.container}>
      <h2 className={classes["company-name"]}>{props.data.companyName} </h2>
      <h1 className={classes["product-name"]}>{props.data.name}</h1>
      <p className={classes.description}>{props.data.description}</p>
      <div className={classes["price-discount"]}>
        <div className={classes.price}>
          <p className={classes["discounted-price"]}>${discountedPrice()}</p>
          <p className={classes.discount}>{props.data.discount}%</p>
        </div>
        <p className={classes["regular-price"]}>${props.data.normalPrice}</p>
      </div>
      <div className={classes.counter}>
        <p onClick={substract} className={classes.add}>
          -
        </p>
        <p className={classes.result}>{result}</p>
        <p onClick={add} className={classes.substract}>
          +
        </p>
      </div>
      <button onClick={addToCart} className={classes.btn} type="submit">
        <img src={cart} className={classes["cart-icon"]} alt="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default Card;
