import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/common/Icon'

import { StyledButton } from './styled'

function IconButton({ hideLabel, icon, label, onClick, ...props }) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      aria-label={hideLabel ? label : null}
    >
      <Icon icon={icon} {...props} />
      {!hideLabel && <span>{label}</span>}
    </StyledButton>
  )
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default IconButton
