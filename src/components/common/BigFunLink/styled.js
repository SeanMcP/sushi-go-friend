import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  align-items: center;
  background: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: center;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 100ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: ${p => p.theme.ORANGE};
    border-color: ${p => p.theme.ORANGE};
    color: ${p => p.theme.BACKGROUND};
  }
`
