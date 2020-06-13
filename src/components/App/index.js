import React from 'react'
import { Router } from '@reach/router'
import './styles.css'

import usePlayers from 'hooks/usePlayers'

import SetupView from '../views/SetupView'
import HomeView from '../views/HomeView'
import PuddingView from '../views/PuddingView'
import PlayView from '../views/PlayView'
import ResultsView from '../views/ResultsView'

import ROUTES from 'constants/routes'

function App() {
  const players = usePlayers()

  return (
    <Router>
      <HomeView path={ROUTES.HOME} />
      <SetupView path={ROUTES.SETUP} {...players} />
      <PlayView path={ROUTES.PLAY} {...players} />
      <PuddingView path={ROUTES.PUDDING} {...players} />
      <ResultsView path={ROUTES.RESULTS} {...players} />
    </Router>
  )
}

export default App
