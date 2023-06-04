import React from "react";
import "../styles/Loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="custom-loader"></div>
      <p className="alternative-text loading-text">Loading...</p>
    </div>
  );
};

export { Loader };
