import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'

import THEME from 'styles/theme'
import { StyledDiv, StyledMain } from './styled'

import usePlayers from 'hooks/usePlayers'

import PlayersView from '../views/PlayersView'
import RecordView from '../views/RecordView'

import Footer from 'components/Footer'
import Header from 'components/Header'

function App() {
  const Players = usePlayers()

  return (
    <ThemeProvider theme={THEME}>
      <StyledDiv>
        <Header />
        <StyledMain>
          <Router>
            <PlayersView path="/" {...Players} />
            <RecordView path="/play" {...Players} />
          </Router>
        </StyledMain>
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
