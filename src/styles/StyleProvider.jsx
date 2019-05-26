import React from 'react'
import { ThemeProvider } from 'styled-components'

import { THEME, GlobalStyle } from './theme'

function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={THEME}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

export default StyleProvider
