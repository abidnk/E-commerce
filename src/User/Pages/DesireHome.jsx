import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Desire from "../Components/Desire";
import desire from "../../assets/img/Desire/Elite Header image.png";
const DesireHome = () => {
  return (
    <div>
      <NavBar />
      <img
        src={desire}
        alt="pinnem Pani Pali"
        style={{ width: "100%", height: "auto" }}
      />

      <Desire />
      <Footer />
    </div>
  );
};

export default DesireHome;
