import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import { StyledOl, StyledItemContainer } from './styled'

function ResultsView(props) {
  const { players } = props
  function rankPlayers() {
    const _array = []
    for (const id in players) {
      const player = players[id]
      _array.push({
        name: player.name,
        total: totalResults(player.results),
        id
      })
    }
    _array.sort((current, previous) =>
      current.total > previous.total ? -1 : 1
    )
    return _array
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
          <li key={player.id}>
            <StyledItemContainer>
              <span>
                {renderAward(index)}
                {player.name}
              </span>
              <span>{player.total} pts</span>
            </StyledItemContainer>
          </li>
        ))}
      </StyledOl>
    )
  }
  function renderAward(index) {
    const hash = {
      0: '🥇',
      1: '🥈',
      2: '🥉'
    }
    if (hash[index]) {
      return <span>{hash[index]}</span>
    }
  }
  return (
    <React.Fragment>
      <h2>And the winner is...</h2>
      {renderPlayers()}
      <BigFunLink to="/play#again" translation="Play again?">
        再びプレー?
      </BigFunLink>
    </React.Fragment>
  )
}

export default ResultsView
