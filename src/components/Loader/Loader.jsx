import React from "react";
import "./style.css";

export const Loader = () => {

  return (
    <>
      <div className="overlay">
        <div className="center">
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
};
