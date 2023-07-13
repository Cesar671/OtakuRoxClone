import React, { useContext } from "react";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  ULIMG,
} from "../../../constants/styled";
import { recomendados } from "../../../constants/recomendados";

const RecomendList = () => {
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
    <Widget movil={false}>
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
