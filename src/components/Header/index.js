import React from 'react'

import { StyledHeader, StyledH1, StyledLink, StyledP } from './styled'

function Header() {
  return (
    <StyledHeader>
      <StyledH1>
        <StyledLink to="/">寿司行く友人</StyledLink>
      </StyledH1>
      <StyledP>Sushi Go Friend</StyledP>
    </StyledHeader>
  )
}

export default Header
