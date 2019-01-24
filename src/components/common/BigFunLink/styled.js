import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  background: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  display: block;
  font-size: 2rem;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
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
    span:last-of-type {
      display: none;
    }
    &:hover,
    &:active,
    &:focus {
      span:first-of-type {
        display: none;
      }
      span:last-of-type {
        display: block;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.MOBILE}) {
    font-size: 1.5rem;

    span {
      display: block;
    }
    span:last-of-type {
      font-size: 1rem;
      padding-top: 0.25rem;
      text-align: center;
    }
  }
`
