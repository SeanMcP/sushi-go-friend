import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from 'styles/theme'
import { StyledDiv, StyledMain } from './styled'

import usePlayers from 'hooks/usePlayers'

import HomeView from '../views/HomeView'
import PuddingView from '../views/PuddingView'
import PlayView from '../views/PlayView'
import ResultsView from '../views/ResultsView'

import Footer from 'components/Footer'
import Header from 'components/Header'

function App() {
  const Players = usePlayers()

  return (
    <ThemeProvider theme={THEME}>
      <StyledDiv>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <Router>
            <HomeView path="/" {...Players} />
            <PlayView path="/play" {...Players} />
            <PuddingView path="/pudding" {...Players} />
            <ResultsView path="/results" {...Players} />
          </Router>
        </StyledMain>
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
