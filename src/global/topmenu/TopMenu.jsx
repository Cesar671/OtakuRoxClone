import React from 'react'
import styles from "./topmenu.module.css"
import { tokens, ColorThemeContext } from "../theme"
import { URL_LOGO } from '../resources'

const TopMenu = () => {

  const mode = React.useContext(ColorThemeContext).mode;
  const colors = tokens(mode);

  return (
    <nav className={ styles.topmenu_container }
      style={{
        backgroundColor: colors.primary[800],
        color: colors.primary[100]
      }}
    >
      <img className={ styles.img_logo } src={ URL_LOGO } />
      <div className={ styles.topmenu_button_container }>
      <div> gola </div>
        <a 
          href='#' 
          className={ styles.topmenu_link }
          style={{
            color: colors.primary[100]
          }}
        >
          <div className={ styles.button }>
              link hacia algun lugar
              <div className={ styles.buttonLineStyled } ></div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default TopMenu