import styled from 'styled-components'

export const H2 = styled.h2`
  margin-bottom: 0.5rem;
`

export const StyledUl = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  list-style: none;
  margin: 0 0 2rem;
  padding-left: 1rem;
`

export const StyledLabel = styled.label`
  align-items: center;
  display: flex;

  input {
    height: 1rem;
    width: 1rem;
  }

  input + span {
    margin-left: 0.25rem;
    font-size: 1rem;
  }
`
