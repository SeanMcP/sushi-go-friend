import React from 'react'
import { Redirect } from '@reach/router'

import BigFunLink from 'components/common/BigFunLink'
import Input from 'components/common/Input'
import {
  StyledDivPlayer,
  StyledDivPlayerHead,
  StyledDivRounds,
  StyledH2
} from './styled'

function PlayView({
  location: { hash },
  players,
  recordResult,
  resetResults,
  ...props
}) {
  if (!Object.keys(players).length) {
    return <Redirect to="/setup" noThrow />
  }
  React.useEffect(() => {
    if (hash === '#again') {
      resetResults()
      props.navigate('/play')
    }
  })
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
    <React.Fragment>
      <StyledH2>Play!</StyledH2>
      {renderPlayers()}
      <BigFunLink to="/pudding" translation="Next!">
        次!
      </BigFunLink>
    </React.Fragment>
  )
}

export default PlayView
