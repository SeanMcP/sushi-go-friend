import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styled'

function Button({ children, ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
