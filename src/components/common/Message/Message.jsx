import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Message.styled'
import Icon from '../Icon'

const types = {
  info: 'Info',
  warning: 'AlertTriangle',
  error: 'XOctagon'
}

function Message({ children, type = 'info' }) {
  return (
    <S.Container>
      <Icon icon={types[type]} label={type} />
      <S.Message>{children}</S.Message>
    </S.Container>
  )
}

Message.propTypes = {
  type: PropTypes.oneOf(Object.keys(types))
}

export default Message
