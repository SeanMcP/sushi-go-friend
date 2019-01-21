import React from 'react'
import { Router } from '@reach/router'

import { StyledDiv } from './styled'

import usePlayers from 'hooks/usePlayers'

import PlayersView from '../views/PlayersView'
import RecordView from '../views/RecordView'

import Header from 'components/Header'

function App() {
  const Players = usePlayers()

  return (
    <StyledDiv>
      <Header />
      <Router>
        <PlayersView path="/" {...Players} />
        <RecordView path="/play" {...Players} />
      </Router>
    </StyledDiv>
  )
}

export default App
