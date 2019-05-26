import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import IconButton from 'components/common/IconButton'
import PlayerResults from 'components/common/PlayerResults'
import RedirectToSetup from 'components/common/RedirectToSetup/RedirectToSetup'
import View from 'components/View/View'
import ROUTES from 'constants/routes'

import { StyledDiv, StyledH2 } from './styled'

function PlayView({
  location: { hash },
  hasPlayers,
  navigate,
  players,
  recordResult,
  resetResults
}) {
  if (!hasPlayers) {
    return <RedirectToSetup />
  }
  React.useEffect(() => {
    if (hash === '#again') {
      resetResults()
      navigate('/play')
    }
  })
  return (
    <View>
      <StyledDiv>
        <StyledH2>Play!</StyledH2>
        <IconButton icon={'RefreshCw'} label="Reset" onClick={resetResults} />
      </StyledDiv>
      <PlayerResults players={players} recordResult={recordResult} />
      <BigFunLink to={ROUTES.PUDDING} translation="Next!">
        次!
      </BigFunLink>
    </View>
  )
}

export default PlayView
