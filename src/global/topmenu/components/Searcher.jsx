import React from 'react'
import { tokens, ColorThemeContext } from '../../theme'
import styles from './searcher.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searcher = () => {

    const mode = React.useContext(ColorThemeContext).mode
    const colors = tokens(mode);
    const ref = React.useRef();
    const [ inputText, setInputText ] = React.useState("")

    const handlerInputSearcher = (e) => {
        if(e.keyCode == 13){
            console.log(ref.current.value)
        }
    }

    const handlerChangeValue = () => {
        setInputText(ref.current.value)
    }

  return (
    <div  
        className={ styles.container_searcher }
        style={{
            backgroundColor: colors.primary[500],
        }}
    >
        <FontAwesomeIcon 
            icon={ faSearch }
            style={{
                fontSize: "14px",
            }}
        />
        <input 
            ref = { ref }
            onChange={ handlerChangeValue }
            onKeyDown={ handlerInputSearcher }
            className={ styles.input_searcher } 
            type='search' 
            placeholder='Buscar...'
            style={{
                color: colors.primary[900]
            }}
            />
    </div>
  )
}

export default Searcher