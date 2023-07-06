import React, { useEffect, useState } from 'react'
import styles from "./topmenu.module.css"
import { tokens, ColorThemeContext } from "../theme"
import { URL_LOGO } from '../resources'
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searcher from './components/Searcher'

const ButtonTopMenu = ({ link, name, colors, styleProp }) => (
    <a 
          href={ link } 
          className={ styles.topmenu_link }
          style={{
            color: colors.primary[900]
          }}
        >
        <div className={ styles.button_container_topmenu }
          style = {{
            '@media (maxWidth: 1100px)': {
              color: `${colors.red[500]} !important`,
              
            }
          }}
        >
          <div className={ styles.button } style={styleProp}>
              { name }
              
          </div>
          <div className={ styles.buttonLineStyled } />
        </div>
          
        </a>
)



const TopMenu = () => {

  const { mode, toogleMode } = React.useContext(ColorThemeContext);
  const colors = tokens(mode);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [ isSmallWindows, setIsSmallWindows ] = useState(window.matchMedia('(max-width: 1100px)').matches)

  useEffect(() => {
      const handleResize = () => {
        setIsSmallWindows(window.matchMedia('(max-width: 1100px)').matches)
      }

      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }

  },[])

  return (
    <nav 
      style={{
        backgroundColor: colors.menu[500],
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

          <FontAwesomeIcon 
            style={{
              color: colors.red[500],
              fontSize: "30px",
              cursor: "pointer",
              display: (isSmallWindows)? "flex": "none",
              userSelect: "none"
            }} 
            onClick={ () => setIsCollapsed(!isCollapsed) }
            icon={ faBars }  
          />
          <div 
            className={ styles.topmenu_button_container }
            style={
              {
                backgroundColor: ( isSmallWindows ) ? colors.primary[100]:colors.menu[500],
                display: (isSmallWindows) && ((isCollapsed) ? "flex":"none")
              }
            }
          >
            <div className={ styles.topmenu_button_container_before }
              style={{
                 borderColor : `transparent transparent ${ colors.primary[600] } transparent`,
                 
              }}
            ></div>
            <ButtonTopMenu link="#" name="Series" colors={ colors }/>
            <ButtonTopMenu link="#" name="Musica" colors={ colors }/>
            <ButtonTopMenu link="#" name="Juegos" colors={ colors }/>
            <ButtonTopMenu link="#" name="Temporada" colors={ colors }/>
            <ButtonTopMenu link="#" name="¿Que Ver?" colors={ colors }/>
            <ButtonTopMenu link="#" name="Registro" colors={ colors } styleProp={
              {backgroundColor: colors.orange[500], color: "white"}
            }
            />
            <ButtonTopMenu link="#" name="Iniciar Sesion" colors={ colors } styleProp={
              {backgroundColor: colors.primary[800], color: "white"}
            }/>
            <FontAwesomeIcon 
              className={ styles.hand_animation }
              icon={ (mode == "light") ? faMoon: faSun }
              style={{
                fontSize: "25px",
                margin: "5px 10px 5px 15px",
                color: colors.red[500]
              }}
              onClick={ toogleMode }
            />
            <Searcher />
          </div>

      </div>
      
    </nav>
  )
}

export default TopMenu