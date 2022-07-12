import React from "react";
import classes from "../css/modal.module.css";
import close from "../images/icon-close.svg";

const Modal = (props) => {
  console.log(props);
  const closeMenuHandler = () => {
    return props.onCloseMenu(false);
  };
  return (
    <div className={classes.backdrop} onClick={closeMenuHandler}>
      <div className={classes.content}>
        <img
          className={classes.closeImg}
          onClick={closeMenuHandler}
          src={close}
          alt="close"
        />
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
    </div>
  );
};

export default Modal;
