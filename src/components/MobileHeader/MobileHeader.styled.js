import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export const BackButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
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
  background: ${p => p.theme.FRAME};
  color: white;
  display: flex;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
`

export const Link = styled(_Link)`
  text-decoration: none;
`

export const BackLink = styled(_Link)`
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
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
