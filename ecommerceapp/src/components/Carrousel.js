import React, { useState } from "react";
import classes from "../css/carrousel.module.css";
import ModalCarrousel from "../UI/ModalCarrousel";

const Carrousel = (props) => {
  // for showing ModalCarrousel
  const [carrouselShown, setCarrouselShown] = useState(false);

  const showCarrousel = () => {
    setCarrouselShown(!carrouselShown);
  };
  const hideCarrousel = (value) => {
    setCarrouselShown(value);
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

  const thumbnailIndexSelection = (event) => {
    const identifier = event.target.alt;

    if (identifier === "thumbnail1") {
      setIndex(0);
    } else if (identifier === "thumbnail2") {
      setIndex(1);
    } else if (identifier === "thumbnail3") {
      setIndex(2);
    } else if (identifier === "thumbnail4") {
      setIndex(3);
    } else {
      return;
    }
  };

  console.log(props);
  return (
    <div className={classes.container}>
      {carrouselShown && (
        <ModalCarrousel
          carrouselShown={carrouselShown}
          hideCarrousel={hideCarrousel}
          data={props.data}
        />
      )}
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
        onClick={showCarrousel}
        className={classes["carrousel-img"]}
        src={props.data.imgs[index]}
        alt="fotos"
      ></img>
      <div className={classes.thumbnails}>
        <img
          id="1"
          onClick={thumbnailIndexSelection}
          className={classes["thumbnails-img"]}
          src={props.data.thumbnails[0]}
          alt="thumbnail1"
          value="0"
        />
        <img
          id="2"
          onClick={thumbnailIndexSelection}
          className={classes["thumbnails-img"]}
          src={props.data.thumbnails[1]}
          alt="thumbnail2"
          value="1"
        />
        <img
          id="3"
          onClick={thumbnailIndexSelection}
          className={classes["thumbnails-img"]}
          src={props.data.thumbnails[2]}
          alt="thumbnail3"
          value="2"
        />
        <img
          id="4"
          onClick={thumbnailIndexSelection}
          className={classes["thumbnails-img"]}
          src={props.data.thumbnails[3]}
          alt="thumbnail4"
          value="3"
        />
      </div>
    </div>
  );
};

export default Carrousel;
