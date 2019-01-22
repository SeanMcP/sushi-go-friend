import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'

import THEME from 'styles/theme'
import { StyledDiv } from './styled'

import usePlayers from 'hooks/usePlayers'

import PlayersView from '../views/PlayersView'
import RecordView from '../views/RecordView'

import Header from 'components/Header'

function App() {
  const Players = usePlayers()

  return (
    <ThemeProvider theme={THEME}>
      <StyledDiv>
        <Header />
        <Router>
          <PlayersView path="/" {...Players} />
          <RecordView path="/play" {...Players} />
        </Router>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
