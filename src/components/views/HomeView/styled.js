import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledUl = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  margin-top: 0;
  padding: 0;
`

export const StyledDivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`

export const StyledLink = styled(Link)`
  background: transparent;
  border: 2px solid black;
  border-radius: 0.5rem;
  color: black;
  display: block;
  font-size: 2rem;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 100ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: ${props => props.theme.ORANGE};
    border-color: black;
    color: black;
  }
`
