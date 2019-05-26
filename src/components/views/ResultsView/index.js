import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import RedirectToSetup from 'components/common/RedirectToSetup/RedirectToSetup'
import View from 'components/View/View'
import ROUTES from 'constants/routes'
import { StyledLi, StyledOl, StyledItemContainer } from './styled'

function ResultsView({ hasPlayers, players }) {
  if (!hasPlayers) {
    return <RedirectToSetup />
  }
  function rankPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push({
        name: player.name,
        total: totalResults(player.results),
        id
      })
    }
    output.sort((current, previous) =>
      current.total > previous.total ? -1 : 1
    )
    return output
  }
  function totalResults(results) {
    let total = 0
    for (const round in results) {
      total += Number(results[round])
    }
    return total
  }
  function renderPlayers() {
    const rankedPlayers = rankPlayers()
    return (
      <StyledOl>
        {rankedPlayers.map((player, index) => (
          <StyledLi key={player.id} first={index === 0}>
            <StyledItemContainer>
              <span>{player.name}</span>
              <span>{player.total} pts</span>
            </StyledItemContainer>
          </StyledLi>
        ))}
      </StyledOl>
    )
  }
  return (
    <View heading="Results">
      <h2>And the winner is...</h2>
      {renderPlayers()}
      <BigFunLink to={ROUTES.PLAY_AGAIN} translation="Play again?">
        再びプレー?
      </BigFunLink>
    </View>
  )
}

export default ResultsView
