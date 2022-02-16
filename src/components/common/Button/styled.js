import styled from 'styled-components'

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
    color: ${p => p.theme.ORANGE};
    border-color: ${p => p.theme.ORANGE};
  }
`
