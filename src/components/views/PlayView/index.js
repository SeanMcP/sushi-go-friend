import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import IconButton from 'components/common/IconButton'
import PlayerResults from 'components/common/PlayerResults'
import RedirectToSetup from 'components/common/RedirectToSetup/RedirectToSetup'
import View from 'components/View/View'
import ROUTES from 'constants/routes'

import * as S from './styled'

function PlayView({
  location: { hash },
  hasPlayers,
  navigate,
  players,
  recordResult,
  resetResults
}) {
  React.useEffect(() => {
    if (hash === '#again') {
      resetResults()
      navigate('/play')
    }
  })
  if (!hasPlayers) {
    return <RedirectToSetup />
  }
  return (
    <View
      heading={
        <S.HeaderContainer>
          <S.H1>Play!</S.H1>
          <IconButton icon={'RefreshCw'} label="Reset" onClick={resetResults} />
        </S.HeaderContainer>
      }
    >
      <PlayerResults players={players} recordResult={recordResult} />
      <BigFunLink to={ROUTES.PUDDING} translation="Next!">
        次!
      </BigFunLink>
    </View>
  )
}

export default PlayView
