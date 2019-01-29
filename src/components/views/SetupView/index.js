import React from 'react'

import IconButton from 'components/common/IconButton'
import Input from 'components/common/Input'
import PlayerRow from 'components/common/PlayerRow'

import { StyledUl, StyledDivButtonContainer } from './styled'
import BigFunLink from 'components/common/BigFunLink'

function SetupView({
  addPlayer,
  hasPlayers,
  numberOfPlayers,
  players,
  removeAllPlayers,
  removePlayer
}) {
  function renderPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <PlayerRow
          button={
            <IconButton
              icon={'Delete'}
              label="Remove player"
              onClick={() => removePlayer(id)}
              hideLabel
            />
          }
          key={id}
          name={player.name}
        />
      )
    }
    return output
  }
  return (
    <React.Fragment>
      <h2>Setup!</h2>
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        placeholder="Who's playing?"
        onKeyPress={e => addPlayer(e.target.value)}
      />
      {hasPlayers && (
        <React.Fragment>
          <StyledDivButtonContainer>
            <IconButton
              icon={'Trash2'}
              label="Remove all"
              onClick={removeAllPlayers}
            />
          </StyledDivButtonContainer>
          <StyledUl>{renderPlayers()}</StyledUl>
        </React.Fragment>
      )}
      {numberOfPlayers > 1 && (
        <BigFunLink to="/play" translation="Play!">
          遊びます!
        </BigFunLink>
      )}
    </React.Fragment>
  )
}

export default SetupView
