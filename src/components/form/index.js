import React from 'react'
import styled, { css } from 'styled-components'

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 0.5rem 0;
`

export const Description = styled.p`
  font-style: italic;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`

export const Input = styled.input`
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
    box-shadow: 0 0 0 4px ${p => p.theme.ORANGE};
  }
`

export const UncontrolledInput = React.forwardRef((props, ref) => (
  <Input {...props} ref={ref} />
))
