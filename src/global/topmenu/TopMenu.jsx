import React from 'react'
import styles from "./topmenu.module.css"
import { tokens, ColorThemeContext } from "../theme"
import { URL_LOGO } from '../resources'

const ButtonTopMenu = ({ link, name, colors }) => (
    <a 
          href={ link } 
          className={ styles.topmenu_link }
          style={{
            color: colors.primary[900]
          }}
        >
          <div className={ styles.button }>
              { name }
              <div className={ styles.buttonLineStyled } ></div>
          </div>
        </a>
)

const TopMenu = () => {

  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);

  return (
    <nav 
      style={{
        backgroundColor: colors.primary[500],
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        className={ styles.topmenu_container }
        >
        <div className={ styles.img_logo_container }>
          <img className={ styles.img_logo } src={ URL_LOGO } />
        </div>
        
        <div 
          className={ styles.topmenu_button_container }

        >
          <ButtonTopMenu link="#" name="Series" colors={ colors }/>
          <ButtonTopMenu link="#" name="Musica" colors={ colors }/>
          <ButtonTopMenu link="#" name="Juegos" colors={ colors }/>
          <ButtonTopMenu link="#" name="Temporada" colors={ colors }/>
          <ButtonTopMenu link="#" name="Registro" colors={ colors }/>
          <ButtonTopMenu link="#" name="Iniciar Sesion" colors={ colors }/>
          <button onClick={ toogleMode }> M </button>
          <input type='search' ></input>
        </div>
      </div>
      
    </nav>
  )
}

export default TopMenu