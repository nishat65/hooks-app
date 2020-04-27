import React, { useState } from "react";
import ListCard from "./ListCard";

const BurgerButton = () => {
  const [show, setShow] = useState(false);
  let style = {};
  function showListBox() {
    setShow(!show);
  }
  return (
    <div className="burger-button">
      <button onClick={showListBox}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {show && <ListCard style={style} />}
    </div>
  );
};

const Button = () => {};

export default BurgerButton;
