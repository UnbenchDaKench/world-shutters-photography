import React from "react";

function SliderItem({ image, isActive }) {
  return (
    <div className={`slider-item ${isActive ? "active" : ""}`}>
      <img src={image} alt="" />
    </div>
  );
}

export default SliderItem;
