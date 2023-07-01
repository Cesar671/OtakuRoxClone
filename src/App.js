import React from 'react'
import HomePage from './pages/HomePage'
import { ColorThemeContext } from './global/theme'
import { useMode } from './global/theme'

const App = () => {
  const [ mode, useModeF ] = useMode();
  return (
    <React.StrictMode >
      <ColorThemeContext.Provider value= {{ toogleMode: useModeF, mode:mode }}>
        <HomePage />
      </ColorThemeContext.Provider> 
    </React.StrictMode>
  )
}

export default App
