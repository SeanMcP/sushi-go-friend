import React from "react";
import PropTypes from "prop-types";

import {
  StyledHelpText,
  StyledInput,
  StyledLabel,
  StyledLabelText
} from "./styled";

function Input({ help, label, onKeyPress, ...props }) {
  const [value, setValue] = React.useState("");

  function handleOnKeyPress(e) {
    if (e.key === "Enter" && onKeyPress) {
      onKeyPress(e);
      setValue("");
    }
  }

  return (
    <StyledLabel onKeyPress={handleOnKeyPress} {...props}>
      <StyledLabelText>{label}</StyledLabelText>
      <StyledHelpText>{help}</StyledHelpText>
      <StyledInput value={value} onChange={e => setValue(e.target.value)} />
    </StyledLabel>
  );
}

Input.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Input;
