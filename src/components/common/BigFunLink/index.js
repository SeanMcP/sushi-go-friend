import React from 'react'

import { StyledLink } from './styled'

function BigFunLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}

export default BigFunLink
