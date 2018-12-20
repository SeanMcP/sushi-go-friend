import styled from 'styled-components'

export const StyledP = styled.p`
  font-size: 0.75rem;
  margin: 0;
  opacity: 0;
  text-align: center;
  transform: translateY(-1rem);
  transition: all 200ms ease-in-out;
`

export const StyledHeader = styled.header`
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  &:hover ${StyledP} {
    opacity: 0.5;
    transform: translateY(0);
  }
`

export const StyledH1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 2.25rem;
  }
`
