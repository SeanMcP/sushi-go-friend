import React from 'react'
import { Redirect } from '@reach/router'

import BigFunLink from 'components/common/BigFunLink'
import IconButton from 'components/common/IconButton'
import PlayerResults from 'components/common/PlayerResults'
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
    return <Redirect to="/setup" noThrow />
  }
  React.useEffect(() => {
    if (hash === '#again') {
      resetResults()
      navigate('/play')
    }
  })
  return (
    <React.Fragment>
      <StyledDiv>
        <StyledH2>Play!</StyledH2>
        <IconButton icon={'RefreshCw'} label="Reset" onClick={resetResults} />
      </StyledDiv>
      <PlayerResults players={players} recordResult={recordResult} />
      <BigFunLink to="/pudding" translation="Next!">
        次!
      </BigFunLink>
    </React.Fragment>
  )
}

export default PlayView
