import React from 'react'

import IconButton from 'components/common/IconButton'
import Input from 'components/common/Input'
import PlayerRow from 'components/common/PlayerRow'

import { StyledLink, StyledUl, StyledDivButtonContainer } from './styled'

function PlayersView(props) {
  const { addPlayer, players, removeAllPlayers, removePlayer } = props
  function renderPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <PlayerRow
          button={
            <IconButton
              icon={'Delete'}
              label="Remove"
              onClick={() => removePlayer(id)}
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
    <main>
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => addPlayer(e.target.value)}
      />
      {Object.keys(players).length > 0 && (
        <React.Fragment>
          <StyledUl>{renderPlayers()}</StyledUl>
          <StyledDivButtonContainer>
            <IconButton
              icon={'Trash2'}
              label="Remove all"
              onClick={removeAllPlayers}
            />
          </StyledDivButtonContainer>
        </React.Fragment>
      )}
      {Object.keys(players).length > 1 && (
        <StyledLink to="play">遊びます!</StyledLink>
      )}
    </main>
  )
}

export default PlayersView
