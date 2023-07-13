import React from "react";
import MainTmplt from "../global/templates/MainTmplt";
import "./HomePage.css";
import ContainerLeft from "../global/templates/left/ContainerLeft";
import ContainerRight from "../global/templates/right/ContainerRight";

const HomePage = () => {
  return (
    <MainTmplt>
      <div className="container">
        <div className="krs-flex">
          <ContainerLeft />
          <ContainerRight />
        </div>
      </div>
    </MainTmplt>
  );
};

export default HomePage;
