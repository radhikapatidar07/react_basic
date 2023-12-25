import React from "react";
import { addItem, removeItem } from "../../slices/cart";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItem());
  };
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(removeItem());
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleAddToCart}>
        Add Product
      </button>
      <br />
      <br />
      <button style={buttonStyle} onClick={handleRemoveFromCart}>
        Remove Product
      </button>
    </div>
  );
};

export default Button;
