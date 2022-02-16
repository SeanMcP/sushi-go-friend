import React from 'react'

import ExternalLink from 'components/common/ExternalLink'
import { StyledFooter } from './styled'

function Footer() {
  return (
    <StyledFooter>
      <p>
        <ExternalLink to="https://gamewright.com/product/Sushi-Go">
          Sushi Go!®
        </ExternalLink>{' '}
        is a registered trademark of{' '}
        <ExternalLink to="https://gamewright.com/">GAMEWRIGHT</ExternalLink>
      </p>
      <p>
        Made by <ExternalLink to="https://seanmcp.com">SeanMcP</ExternalLink>
      </p>
    </StyledFooter>
  )
}

export default Footer
