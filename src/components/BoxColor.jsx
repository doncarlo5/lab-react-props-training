import React from "react";

export default function BoxColor(props) {
  const boxStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: "white",
    width: "500px",
    height: "100px",
    border: "2px solid #000",
    margin: "10px",
    textAlign: "center",
  };
  return (
    <div style={boxStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}
