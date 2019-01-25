import React from 'react'

import { StyledHeader, StyledH1, StyledLink } from './styled'

function Header() {
  return (
    <StyledHeader>
      <StyledH1>
        <StyledLink to="/setup">
          <span aria-labelledby="header-translation">寿司行く友人</span>
          <span id="header-translation">Sushi Go Friend</span>
        </StyledLink>
      </StyledH1>
    </StyledHeader>
  )
}

export default Header
