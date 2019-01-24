import React from 'react'

import { StyledLink } from './styled'

function BigFunLink({ children, translation, ...props }) {
  return (
    <StyledLink {...props}>
      <span aria-label={translation}>{children}</span>
      <span>{translation}</span>
    </StyledLink>
  )
}

export default BigFunLink
