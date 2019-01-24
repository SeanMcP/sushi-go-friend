import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledHeader = styled.header`
  background: ${props => props.theme.RED};
  padding: 1rem 0;
`

export const StyledH1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.MOBILE}) {
    span:last-of-type {
      display: none;
    }

    &:hover {
      span:first-of-type {
        display: none;
      }
      span:last-of-type {
        display: block;
      }
    }
  }

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
  color: white;
  text-decoration: none;
`
