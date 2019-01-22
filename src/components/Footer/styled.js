import styled from 'styled-components'

export const StyledFooter = styled.footer`
  border-top: 2px solid black;
  font-size: 0.75rem;
  padding-top: 0.75rem;
  text-align: center;

  a,
  a:visited {
    color: black;
  }

  a:active,
  a:focus,
  a:hover {
    color: ${props => props.theme.ORANGE};
  }
`