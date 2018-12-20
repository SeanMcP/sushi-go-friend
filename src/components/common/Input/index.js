import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledHelpText,
  StyledInput,
  StyledLabel,
  StyledLabelText
} from './styled'

function Input({ help, label, onChange, onKeyPress, value = '', ...props }) {
  const [_value, setValue] = React.useState(value)

  function handleOnChange(e) {
    if (onChange) {
      onChange(e)
    }
    setValue(e.target.value)
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter' && onKeyPress) {
      onKeyPress(e)
      setValue('')
    }
  }

  return (
    <StyledLabel onKeyPress={handleOnKeyPress} {...props}>
      <StyledLabelText>{label}</StyledLabelText>
      <StyledHelpText>{help}</StyledHelpText>
      <StyledInput value={_value} onChange={handleOnChange} />
    </StyledLabel>
  )
}

Input.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default Input
