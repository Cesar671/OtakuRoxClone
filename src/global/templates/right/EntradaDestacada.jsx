import React, { useContext } from "react";
import { tokens, ColorThemeContext } from "../../theme";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  Destacado,
} from "../../../constants/styled";
import { destacados } from "../../../constants/destacados";

const EntradaDestacada = () => {
  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const randomElements = shuffleArray(destacados).slice(0, 1);
  /* ${(props) =>
    props.movil === false &&
    "@media screen and (max-width: 992px) { display: none; }"} */
  return (
    <Widget
      className="no-movil"
      style={{
        backgroundColor: colors.menu[500],
        color: colors.primary[900],
      }}
    >
      <WidgetTitle>Entrada destacada</WidgetTitle>
      <WidgetContent>
        {randomElements.map((item) => (
          <Destacado key={item.id}>
            <img alt={item.descripcion} src={item.src} />
            <a href={item.href}>
              <h3>{item.title}</h3>
            </a>
            <p>{item.descripcion}</p>
          </Destacado>
        ))}
      </WidgetContent>
    </Widget>
  );
};

export default EntradaDestacada;
