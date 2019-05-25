import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/common/Icon'

import { StyledButton } from './styled'

function IconButton({ alternate = false, hideLabel, icon, label, ...props }) {
  return (
    <StyledButton
      {...props}
      aria-label={hideLabel ? label : null}
      alternate={alternate}
    >
      <Icon icon={icon} />
      {!hideLabel && <span>{label}</span>}
    </StyledButton>
  )
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  icon: PropTypes.string.isRequired
}

IconButton.defaultProps = {
  type: 'button'
}

export default IconButton
