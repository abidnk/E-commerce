import React from "react";
import gif from "../../assets/img/404error.gif";
const Error = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <img src={gif} alt="404 error"></img>
    </div>
  );
};

export default Error;
