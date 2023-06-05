import React from "react";
import "../styles/Loader.css"

const LoaderUI = () => {
  return (
    <>
    <div className="loader-container">
      <div className="custom-loader"></div>
    </div>
      <p className="alternative-text loading-text">Loading...</p>
    </>
  );
};

export { LoaderUI };
