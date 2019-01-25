import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledHeader = styled.header`
  padding: 1rem 0;
`

export const StyledH1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.MOBILE}) {
    font-size: 2.25rem;

    span:last-of-type {
      display: block;
      font-size: 1rem;
      font-weight: normal;
      padding-top: 0.25rem;
    }
  }
`

export const StyledLink = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  height: 4rem;
  justify-content: center;
  position: relative;
  text-decoration: none;

  span {
    display: block;
    transition: all 200ms ease-in-out;
  }

  @media screen and (min-width: ${props => props.theme.MOBILE}) {
    span {
      position: absolute;
    }

    span:last-of-type {
      opacity: 0;
    }

    &:hover {
      span:first-of-type {
        opacity: 0;
      }
      span:last-of-type {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.MOBILE}) {
    display: block;
  }
`
