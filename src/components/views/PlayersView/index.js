import React from 'react'

import Button from 'components/common/Button'
import IconButton from 'components/common/IconButton'
import Input from 'components/common/Input'

function PlayersView(props) {
  const {
    View: { navigate },
    Players: { addPlayer, players, removeAllPlayers, removePlayer }
  } = props
  function renderPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <li key={id} tabIndex={0}>
          {player.name}
          <IconButton
            icon={'Delete'}
            label="Remove"
            onClick={() => removePlayer(id)}
          />
        </li>
      )
    }
    return output
  }
  return (
    <div>
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => addPlayer(e.target.value)}
      />
      {Object.keys(players).length > 0 && (
        <React.Fragment>
          <ul>{renderPlayers()}</ul>
          <IconButton
            icon={'Trash2'}
            label="Remove all"
            onClick={removeAllPlayers}
          />
        </React.Fragment>
      )}
      {Object.keys(players).length > 1 && (
        <Button onClick={() => navigate('record')}>Go!</Button>
      )}
    </div>
  )
}

export default PlayersView
