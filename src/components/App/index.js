import React from 'react'

import { StyledDiv } from './styled'

import usePlayers from 'hooks/usePlayers'

import Button from 'components/common/Button'
import Header from 'components/Header'
import IconButton from 'components/common/IconButton'
import Input from 'components/Input'

function App() {
  const Players = usePlayers()
  return (
    <StyledDiv>
      <Header />
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => Players.addPlayer(e.target.value)}
      />
      {Players.players.length > 0 && (
        <React.Fragment>
          <ul>
            {Players.players.map(player => (
              <li key={player.id} tabIndex={0}>
                {player.name}
                <IconButton
                  icon={'Delete'}
                  label="Remove"
                  onClick={() => Players.removePlayer(player.id)}
                />
              </li>
            ))}
          </ul>
          <IconButton
            icon={'Trash2'}
            label="Remove all"
            onClick={Players.removeAllPlayers}
          />
        </React.Fragment>
      )}
      {Players.players.length > 1 && <Button onClick={() => null}>Go!</Button>}
    </StyledDiv>
  )
}

export default App
