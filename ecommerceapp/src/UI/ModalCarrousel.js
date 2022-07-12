import React, { useState } from "react";
import classes from "../css/modalCarrousel.module.css";
import close from "../images/icon-close.svg";

const ModalCarrousel = (props) => {
  console.log(props);

  const closeModalCarrousel = () => {
    props.hideCarrousel(false);
  };
  // index for Carrousel
  const [index, setIndex] = useState(0);

  const indexIncrement = () => {
    if (index >= 0 && index < 2) {
      setIndex((index) => {
        return index + 1;
      });
    } else {
      setIndex(0);
    }
  };
  const indexDecrease = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((index) => {
        return index - 1;
      });
    }
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <img
          className={classes.close}
          src={close}
          alt="close-btn"
          onClick={closeModalCarrousel}
        />
        <div className={classes["btn-container"]}>
          <p onClick={indexDecrease} className={classes.btn}>
            &lt;
          </p>
          <p onClick={indexIncrement} className={classes.btn}>
            {" "}
            &gt;{" "}
          </p>
        </div>

        <img
          className={classes["carrousel-img"]}
          src={props.data.imgs[index]}
          alt="fotos"
        ></img>
      </div>
    </div>
  );
};

export default ModalCarrousel;
