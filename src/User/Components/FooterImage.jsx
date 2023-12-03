import React from "react";
import footerimage from "../../assets/img/FooterImage.png";

const FooterImage = () => {
  return (
    <div
      className="image"
      style={{ position: "relative", maxWidth: "100%", minWidth: "320px" }}
    >
      <img
        src={footerimage}
        alt="pinnem Pani Pali"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
export default FooterImage;
