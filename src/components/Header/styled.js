import styled from "styled-components";

export const StyledP = styled.p`
  margin: 0;
  opacity: 0;
  text-align: center;
  transform: translateY(-1rem);
  transition: all 200ms ease-in-out;
`;

export const StyledHeader = styled.header`
  &:hover ${StyledP} {
    opacity: 0.5;
    transform: translateY(0);
  }
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-align: center;
`;
