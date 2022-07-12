import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import classes from "../css/header.module.css";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import Cart from "./Cart";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  console.log(props);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const cartHandler = () => {
    setCartOpen(!cartOpen);
  };
  const closeMenu = (value) => {
    setMenuOpen(value);
  };
  return (
    <Fragment>
      <div className={classes["header-container"]}>
        {menuOpen && <Modal onCloseMenu={closeMenu} />}
        <div className={classes["header-container__left"]}>
          <img
            onClick={menuHandler}
            className={classes["menu-btn"]}
            src={menu}
            alt="menu"
          />
          <h1 className={classes.title}>sneakers</h1>
          <ul className={classes.menu}>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={classes["header-container__right"]}>
          <div className={classes.cart}>
            <p className={classes["cart-text"]}> {props.onProductAmount}</p>
            <img
              onClick={cartHandler}
              className={classes["menu-img-left"]}
              src={cart}
              alt="cart"
            />
          </div>

          <img
            className={classes["menu-img-right"]}
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
      {cartOpen && (
        <Cart
          onProductAmount={props.onProductAmount}
          onData={props.data}
          onProductAmountReset={props.onProductAmountReset}
        />
      )}
    </Fragment>
  );
};

export default Header;
