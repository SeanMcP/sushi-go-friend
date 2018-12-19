import React from "react";

import { StyledHeader, StyledH1, StyledP } from "./styled";

function Header(props) {
  return (
    <StyledHeader>
      <StyledH1>寿司行く友人</StyledH1>
      <StyledP>Sushi Go Yūjin</StyledP>
    </StyledHeader>
  );
}

export default Header;
