import React from 'react'
// import PropTypes from 'prop-types'

import Input from 'components/common/Input'
import { StyledDivPlayer, StyledDivPlayerHead, StyledDivRounds } from './styled'

function RecordView(props) {
  const { players, recordResult } = props
  function renderPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <StyledDivPlayer key={id}>
          <StyledDivPlayerHead>
            <span aria-label="Player name">{player.name}</span>
            <span aria-label="Total score">
              {calculateTotal(player.results)} points
            </span>
          </StyledDivPlayerHead>
          <StyledDivRounds>
            {['1', '2', '3'].map(round => (
              <Input
                ariaLabel={`Round ${round} score for ${player.name}`}
                key={`${id}-${round}`}
                onChange={e => recordResult(id, round, e.target.value)}
                type="number"
                value={player.results[round]}
              />
            ))}
          </StyledDivRounds>
        </StyledDivPlayer>
      )
    }
    return output
  }
  function calculateTotal(results) {
    let total = 0
    for (const round in results) {
      total += Number(results[round])
    }
    return total
  }
  return (
    <main>
      <h1>Play!</h1>
      {renderPlayers()}
    </main>
  )
}

export default RecordView
