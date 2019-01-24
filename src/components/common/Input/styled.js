import styled, { css } from 'styled-components'

export const StyledLabel = styled.label`
  display: grid;
  grid-gap: 0.5rem;
`

export const StyledLabelText = styled.div`
  font-weight: bold;
`

export const StyledHelpText = styled.div`
  font-style: italic;
  font-size: 0.875rem;
`

export const StyledInput = styled.input`
  background: white;
  border: 0;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 1rem;
  text-align: center;
  transition: border 200ms ease-in-out;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  &:focus {
    box-shadow: 0 0 0 4px ${props => props.theme.ORANGE};
  }
`
