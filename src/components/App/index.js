import React from 'react'

import { StyledDiv } from './styled'

import usePlayers from 'hooks/usePlayers'
import useView from 'hooks/useView'

import ViewRouter from '../views'

import Header from 'components/Header'

function App() {
  const Players = usePlayers()
  const View = useView()

  const CurrentView = ViewRouter[View.view]
  const pageProps = {
    Players,
    View
  }

  return (
    <StyledDiv>
      <Header />
      <CurrentView {...pageProps} />
    </StyledDiv>
  )
}

export default App
