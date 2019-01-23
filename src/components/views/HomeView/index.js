import React from 'react'

import IconButton from 'components/common/IconButton'
import Input from 'components/common/Input'
import PlayerRow from 'components/common/PlayerRow'

import { StyledLink, StyledUl, StyledDivButtonContainer } from './styled'

function HomeView(props) {
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
  const numberOfPlayers = Object.keys(players).length
  return (
    <React.Fragment>
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => addPlayer(e.target.value)}
      />
      {numberOfPlayers > 0 && (
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
      {numberOfPlayers > 1 && <StyledLink to="play">遊びます!</StyledLink>}
    </React.Fragment>
  )
}

export default HomeView
