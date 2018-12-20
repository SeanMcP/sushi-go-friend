import React from "react";
import PropTypes from "prop-types";

import Icon from "components/common/Icon";

import { StyledButton } from "./styled";

function IconButton({ icon, label, onClick, ...props }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Icon icon={icon} {...props} />
      {label && <span>{label}</span>}
    </StyledButton>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default IconButton;
