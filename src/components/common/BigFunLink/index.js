import React from 'react'

import { StyledLink } from './styled'

function BigFunLink({ children, translation, ...props }) {
  return (
    <StyledLink {...props}>
      <span>{children}</span>
      {translation && <span>{translation}</span>}
    </StyledLink>
  )
}

export default BigFunLink
