import React from 'react'
import style from "./Footer.module.css"
import styleLink from "../globalStyles/button.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { tokens, ColorThemeContext } from '../theme'


const Footer = () => {

    const mode = React.useContext(ColorThemeContext).mode
    const colors = tokens(mode)

  return (

   
    <div
        style={{
            backgroundColor:  colors.footer[500],
            color: colors.footer[200],
            fontSize: "12px"
        }}
    >

        <div id={ style.footerContainer }>
            <a className={ `${styleLink.link_svg} ${styleLink.link}` } href='#'>
                <FontAwesomeIcon icon={faFacebookF }/>
            </a>
            <a className={ `${styleLink.link_svg} ${styleLink.link}` } href='#'>
                <FontAwesomeIcon icon={ faTwitter }/>
            </a>
            <a className={ `${styleLink.link_svg} ${styleLink.link}` } href='#'>
                <FontAwesomeIcon icon={ faInstagram }/>
            </a>
            <a className={ `${styleLink.link_svg} ${styleLink.link}` } href='#'>
                <FontAwesomeIcon icon={ faYoutube }/>
            </a>

        </div>
        <div id={style.footerContainer  }>
            <a className={ `${styleLink.link_a} ${styleLink.link}` }  href='#'>Condiciones de uso</a>
            <a className={ `${styleLink.link_a} ${styleLink.link}` } href='#'>Politica de Privacidad</a>
            <a className={ `${styleLink.link_a} ${styleLink.link}` } href='#'>Deslinde de responsabilidades legales</a>
        </div>
        <div className={style.footerCopyRight}>
            <div>
                OtakuRox &copy; 2019
            </div>
        </div>
    </div>
  )
}

export default Footer