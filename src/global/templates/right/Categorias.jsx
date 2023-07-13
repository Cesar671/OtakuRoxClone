import React, { useContext } from "react";
import { tokens, ColorThemeContext } from "../../theme";
import { categorias_list } from "../../../constants/categorias";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  TagsCloud,
} from "../../../constants/styled";

const Categorias = () => {
  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);
  return (
    <Widget
      className="no-movil"
      style={{
        backgroundColor: colors.menu[500],
        color: colors.primary[900],
      }}
    >
      <WidgetTitle>Categorias series</WidgetTitle>
      <WidgetContent>
        <TagsCloud>
          {categorias_list.map((categoria, index) => (
            <li key={index}>
              <a
                style={{
                  backgroundColor: colors.primary[500],
                  color: colors.primary[800],
                  hover: {
                    backgroundColor: colors.red[500],
                    color: colors.primary[400],
                  },
                }}
                href={categoria.enlace}
                title={categoria.titulo}
              >
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
