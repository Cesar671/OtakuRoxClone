import React, { useContext } from "react";
import { tokens, ColorThemeContext } from "../../theme";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  ULIMG,
} from "../../../constants/styled";
import { recomendados } from "../../../constants/recomendados";

const RecomendList = () => {
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

  const randomElements = shuffleArray(recomendados).slice(0, 3);
  return (
    <Widget
      className="no-movil"
      style={{
        backgroundColor: colors.primary[500],
        color: colors.primary[400],
      }}
    >
      <WidgetTitle>Lista de Recomendaciones</WidgetTitle>
      <WidgetContent>
        <ULIMG>
          {randomElements.map((item) => (
            <li key={item.id}>
              <a href={item.href}>
                <img src={item.src} alt="" />
              </a>
              <div>
                <strong>{item.descripcion}</strong>
              </div>
            </li>
          ))}
        </ULIMG>
      </WidgetContent>
    </Widget>
  );
};

export default RecomendList;
