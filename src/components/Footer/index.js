import React from 'react'

import { StyledFooter } from './styled'

function Footer() {
  return (
    <StyledFooter>
      <p>
        <a
          href="https://gamewright.com/product/Sushi-Go"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sushi Go!®
        </a>{' '}
        is a registered trademark of{' '}
        <a
          href="https://gamewright.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GAMEWRIGHT
        </a>
      </p>
      <p>
        Made by <a href="https://github.com/seanmcp">SeanMcP</a>
      </p>
    </StyledFooter>
  )
}

export default Footer
