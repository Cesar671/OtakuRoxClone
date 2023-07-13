import React from "react";
import { tokens, ColorThemeContext } from "../global/theme";
import MainTmplt from "../global/templates/MainTmplt";
import "./HomePage.css";
import ContainerLeft from "../global/templates/left/ContainerLeft";
import ContainerRight from "../global/templates/right/ContainerRight";

const HomePage = () => {
  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);
  return (
    <MainTmplt>
      <div
        className="container"
        style={{
          backgroundColor: colors.primary[500],
          color: colors.primary[900],
        }}
      >
        <div className="krs-flex">
          <ContainerLeft />
          <ContainerRight />
        </div>
      </div>
    </MainTmplt>
  );
};

export default HomePage;
