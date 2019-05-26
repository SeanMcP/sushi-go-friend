import React from 'react'
import PropTypes from 'prop-types'
import Message from 'components/common/Message/Message'

function PlayerWarning({ numberOfPlayers }) {
  const surplus = numberOfPlayers - 5
  return (
    <Message type="warning">
      Sushi Go! and Sushi Go Friend are limited to <b>5 players</b>. Please{' '}
      <b>
        remove {surplus} player{surplus === 1 ? '' : 's'}
      </b>{' '}
      to play.
    </Message>
  )
}

PlayerWarning.propTypes = {
  numberOfPlayers: PropTypes.number.isRequired
}

export default PlayerWarning
