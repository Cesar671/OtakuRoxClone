import React from 'react'
import PropTypes from 'prop-types'
import styles from "./maintmplt.module.css"
import Footer from '../footer/Footer'
import TopMenu from '../topmenu/TopMenu'

const MainTmplt = ({ children }) => {
  return (
    <div className={ styles.tmplt_main }>
        <header className={ styles.header }>
            <TopMenu />
        </header>
        <main className= { styles.main }>
            { children }
        </main>
        <footer className={ styles.footer }>
            <Footer />
        </footer>
    </div>
  )
}

MainTmplt.propTypes = {
    children: PropTypes.node
}

export default MainTmplt