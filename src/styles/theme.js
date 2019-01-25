import { createGlobalStyle } from 'styled-components'

export const THEME = {
  RED: '#C41E20',
  DARK_RED: '#910302',
  BROWN: '#41210A',
  GREEN: '#AABA34',
  ORANGE: '#FEA612',
  MOBILE: '800px',
  TEXT: '#424242'
}

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

  *:focus {
    box-shadow: 0 0 0 4px ${props => props.theme.ORANGE};
    outline: 0;
  }

  a, a:hover, a:active, a:visited {
    color: white;
  }
  
  a:hover, a:active {
    color: ${props => props.theme.ORANGE};
  }
`
