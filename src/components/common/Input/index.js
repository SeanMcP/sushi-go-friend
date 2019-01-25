import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledHelpText,
  StyledInput,
  StyledLabel,
  StyledLabelText
} from './styled'

function Input({
  ariaLabel,
  help,
  label,
  onChange,
  onKeyPress,
  value = '',
  ...props
}) {
  const [_value, setValue] = React.useState(value)
  React.useEffect(() => {
    setValue(value)
  }, [value])

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
    <StyledLabel onKeyPress={handleOnKeyPress}>
      {label && <StyledLabelText>{label}</StyledLabelText>}
      {help && <StyledHelpText>{help}</StyledHelpText>}
      <StyledInput
        aria-label={ariaLabel}
        value={_value}
        onChange={handleOnChange}
        {...props}
      />
    </StyledLabel>
  )
}

Input.propTypes = {
  ariaLabel: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string
}

Input.defaultProps = {
  ariaLabel: null
}

export default Input
