import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import IconButton from 'components/common/IconButton'
import PlayerRow from 'components/common/PlayerRow'
import PlayerWarning from 'components/setup/PlayerWarning/PlayerWarning'
import View from 'components/View/View'
import * as Form from 'components/form'
import * as S from './styled'

import ROUTES from 'constants/routes'

function SetupView({
  addPlayer,
  hasPlayers,
  numberOfPlayers,
  players,
  removeAllPlayers,
  removePlayer
}) {
  const inputRef = React.createRef()
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
  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    if (name) {
      addPlayer(name)
      e.target.reset()
    }
    inputRef.current.focus()
  }
  return (
    <View>
      <h2>Setup!</h2>
      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="player_input">Add players</Form.Label>
        <Form.Description id="player_input_help">
          Add 2-5 players to start playing
        </Form.Description>
        <S.InputButtonContainer>
          <Form.UncontrolledInput
            aria-describedby="player_input_help"
            id="player_input"
            name="name"
            placeholder="Who's playing?"
            ref={inputRef}
            type="text"
          />
          <IconButton
            label="Add player"
            icon="Plus"
            type="submit"
            alternate
            hideLabel
          >
            Add
          </IconButton>
        </S.InputButtonContainer>
      </form>
      {hasPlayers && (
        <React.Fragment>
          <S.ButtonContainer>
            <IconButton
              icon={'Trash2'}
              label="Remove all"
              onClick={removeAllPlayers}
            />
          </S.ButtonContainer>
          <S.Ul>{renderPlayers()}</S.Ul>
        </React.Fragment>
      )}
      {numberOfPlayers > 5 && (
        <PlayerWarning numberOfPlayers={numberOfPlayers} />
      )}
      {numberOfPlayers > 1 && numberOfPlayers < 6 && (
        <BigFunLink to={ROUTES.PLAY} translation="Play!">
          遊びます!
        </BigFunLink>
      )}
    </View>
  )
}

export default SetupView
