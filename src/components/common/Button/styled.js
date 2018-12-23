import styled from 'styled-components'

import THEME from 'styles/theme'

export const StyledButton = styled.button`
  background: transparent;
  border: 2px solid black;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  padding: 1rem 2rem;
  text-transform: uppercase;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : undefined)};

  &:active,
  &:focus,
  &:hover {
    color: ${THEME.ORANGE};
    border-color: ${THEME.ORANGE};
  }
`
