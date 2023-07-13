import React from "react";
import "./ContainerRight.css";
import EntradaDestacada from "./EntradaDestacada";
import RecomendList from "./RecomendList";
import Categorias from "./Categorias";
import Pedidos from "./Pedidos";

const ContainerRight = () => {
  return (
    <div className="container-right">
      <EntradaDestacada />
      <RecomendList />
      <Categorias />
      <Pedidos />
    </div>
  );
};

export default ContainerRight;
