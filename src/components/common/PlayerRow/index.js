import React from 'react'
import PropTypes from 'prop-types'

import { StyledLi, StyledSpan } from './styled'

const PlayerRow = ({ button, name }) => {
  return (
    <StyledLi>
      <StyledSpan>{name}</StyledSpan>
      {button}
    </StyledLi>
  )
}

PlayerRow.propTypes = {
  button: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired
}

export default PlayerRow
