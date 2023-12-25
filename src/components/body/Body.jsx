import React from "react";
import Button from "./addCartButton";

const Body = () => {
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // 100% of the viewport height
    width: "100vw", // 100% of the viewport width
  };

  return (
    <div style={bodyStyle}>
      <Button />
    </div>
  );
};

export default Body;
