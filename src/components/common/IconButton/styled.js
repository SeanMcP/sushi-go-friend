import styled from "styled-components";

import THEME from "styles/theme";

export const StyledButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.25rem;
  transition: color 100ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${THEME.ORANGE};
  }
`;