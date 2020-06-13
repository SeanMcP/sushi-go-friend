import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  background: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  display: grid;
  font-size: 2rem;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  place-items: center;
  text-align: center;
  text-decoration: none;
  transition: all 100ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: ${props => props.theme.ORANGE};
    border-color: ${props => props.theme.ORANGE};
    color: ${props => props.theme.RED};
  }

  @media screen and (min-width: ${props => props.theme.MOBILE}) {
    height: 3rem;
  }
`
