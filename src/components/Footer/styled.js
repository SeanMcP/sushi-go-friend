import styled from 'styled-components'

export const StyledFooter = styled.footer`
  box-shadow: 0 0 2rem ${props => props.theme.RED};
  font-size: 0.75rem;
  padding: 1rem 0;
  text-align: center;
  z-index: 1;

  a,
  a:visited {
    color: white;
  }

  a:active,
  a:focus,
  a:hover {
    color: ${props => props.theme.ORANGE};
  }
`
