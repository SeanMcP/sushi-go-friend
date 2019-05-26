import styled from 'styled-components'
import { Link as _Link } from '@reach/router'

export const BackButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 48px;

  &:hover,
  &:focus,
  &:active {
    background: rgba(0, 0, 0, 0.1);
    color: ${p => p.theme.ORANGE};
    outline: 4px solid transparent;
  }
`

export const Header = styled.header`
  align-items: center;
  background: ${p => p.theme.RED};
  color: white;
  display: flex;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  position: relative;
`

export const Link = styled(_Link)`
  text-decoration: none;
`
