import { createGlobalStyle } from 'styled-components'

export const THEME = {
  RED: '#C41E20',
  DARK_RED: '#910302',
  BROWN: '#41210A',
  GREEN: '#AABA34',
  ORANGE: '#FEA612',
  WHITE: '#FFFFFF',
  MOBILE: '800px',
  TEXT: '#424242'
}

THEME.BACKGROUND = THEME.DARK_RED
THEME.FRAME = THEME.BROWN
THEME.TEXT = THEME.WHITE

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a:focus, button:focus, input:focus {
    box-shadow: 0 0 0 4px ${p => p.theme.ORANGE};
    outline: 0;
  }

  a, a:hover, a:active, a:visited {
    color: white;
  }
  
  a:hover, a:active {
    color: ${p => p.theme.ORANGE};
  }

  p { line-height: 150% }
`
