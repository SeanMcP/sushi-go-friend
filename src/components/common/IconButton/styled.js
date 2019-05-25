import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.25rem;
  transition: all 100ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.ORANGE};
  }

  ${p =>
    p.alternate &&
    css`
      background: ${p.theme.ORANGE};
      border-radius: 0.5rem;
      color: ${p.theme.RED};

      &:hover,
      &:active,
      &:focus {
        background: white;
        color: ${p.theme.RED};
      }
    `}
`
