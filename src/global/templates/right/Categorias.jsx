import React, { useContext } from "react";
import { categorias_list } from "../../../constants/categorias";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  TagsCloud,
} from "../../../constants/styled";

const Categorias = () => {
  return (
    <Widget>
      <WidgetTitle>Categorias series</WidgetTitle>
      <WidgetContent>
        <TagsCloud>
          {categorias_list.map((categoria, index) => (
            <li key={index}>
              <a href={categoria.enlace} title={categoria.titulo}>
                <span>{categoria.titulo}</span>
              </a>
            </li>
          ))}
        </TagsCloud>
      </WidgetContent>
    </Widget>
  );
};

export default Categorias;
