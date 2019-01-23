import styled, { css } from 'styled-components'

export const StyledLabel = styled.label`
  display: grid;
  grid-gap: 1rem;
`

export const StyledLabelText = styled.div`
  font-weight: bold;
  font-size: 125%;
`

export const StyledHelpText = styled.div`
  font-style: italic;
  font-size: 0.875rem;
`

export const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.0625);
  border: 0;
  border-bottom: 2px solid black;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 1rem;
  transition: border 200ms ease-in-out;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  &:hover,
  &:active,
  &:focus {
    border-color: ${props => props.theme.ORANGE};
  }
`
