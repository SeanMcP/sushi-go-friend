import React from 'react'
import { Router } from '@reach/router'

import StyleProvider from 'styles/StyleProvider'

import usePlayers from 'hooks/usePlayers'

import SetupView from '../views/SetupView'
import HomeView from '../views/HomeView'
import PuddingView from '../views/PuddingView'
import PlayView from '../views/PlayView'
import ResultsView from '../views/ResultsView'

import { PlayersProvider } from 'context/PlayersContext'

import ROUTES from 'constants/routes'

function App() {
  const Players = usePlayers()

  return (
    <StyleProvider>
      <PlayersProvider>
        <Router>
          <HomeView path={ROUTES.HOME} {...Players} />
          <SetupView path={ROUTES.SETUP} {...Players} />
          <PlayView path={ROUTES.PLAY} {...Players} />
          <PuddingView path={ROUTES.PUDDING} {...Players} />
          <ResultsView path={ROUTES.RESULTS} {...Players} />
        </Router>
      </PlayersProvider>
    </StyleProvider>
  )
}

export default App
