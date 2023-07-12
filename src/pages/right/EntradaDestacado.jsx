import React, { useContext } from "react";
import {
  Widget,
  WidgetTitle,
  WidgetContent,
  Destacado,
} from "../../constants/styled";
import { destacados } from "../../constants/destacados";

const EntradaDestacada = () => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const randomElements = shuffleArray(destacados).slice(0, 1);
  return (
    <Widget movil={false}>
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
