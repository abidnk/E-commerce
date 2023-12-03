import React from "react";
import NavBar from "../Components/NavBar";
import Elite from "../Components/Elite";
import Footer from "../Components/Footer";
import elite from "../../assets/img/Elite/DesireHeader image.png";
const EliteHome = () => {
  return (
    <div>
      <NavBar />
      <img
        src={elite}
        alt="pinnem Pani Pali"
        style={{ width: "100%", height: "auto" }}
      />
      <Elite />
      <Footer />
    </div>
  );
};

export default EliteHome;
