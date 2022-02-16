import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import StyleProvider from 'styles/StyleProvider'

import usePlayers from 'hooks/usePlayers'

import SetupView from '../views/SetupView'
import HomeView from '../views/HomeView'
import PuddingView from '../views/PuddingView'
import ResultsView from '../views/ResultsView'

import ROUTES from 'constants/routes'
import RoundView from 'components/views/RoundView/RoundView'

function App() {
  const players = usePlayers()

  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.SETUP} element={<SetupView {...players} />} />
          <Route path={ROUTES.ROUND} element={<RoundView {...players} />} />
          <Route path={ROUTES.PUDDING} element={<PuddingView {...players} />} />
          <Route path={ROUTES.RESULTS} element={<ResultsView {...players} />} />
          <Route index path={ROUTES.HOME} element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  )
}

export default App
