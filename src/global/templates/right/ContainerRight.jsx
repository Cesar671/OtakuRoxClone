import React from "react";
import "./ContainerRight.css";
import EntradaDestacada from "./EntradaDestacada";
import RecomendList from "./RecomendList";
import Categorias from "./Categorias";
import Pedidos from "./Pedidos";
import { tokens, ColorThemeContext } from "../../theme";

const ContainerRight = () => {
  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);
  return (
    <div
      className="container-right"
      style={{
        backgroundColor: colors.menu[500],
      }}
    >
      <EntradaDestacada />
      <RecomendList />
      <Categorias />
      <Pedidos />
    </div>
  );
};

export default ContainerRight;
