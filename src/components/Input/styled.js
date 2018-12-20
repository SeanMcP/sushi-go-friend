import styled from "styled-components";

export const StyledLabel = styled.label`
  display: grid;
  grid-gap: 0.5rem;
`;

export const StyledLabelText = styled.div`
  font-weight: bold;
  font-size: 125%;
`;

export const StyledHelpText = styled.div`
  font-style: italic;
`;

export const StyledInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid black;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem;
  transition: all 200ms ease-in-out;

  &:hover,
  &:active {
    border-color: white;
  }
`;
