import React from "react";
import MainTmplt from "../global/templates/MainTmplt";
import "./HomePage.css";
import ContainerLeft from "./left/ContainerLeft";
import ContainerRight from "./right/ContainerRight";

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
