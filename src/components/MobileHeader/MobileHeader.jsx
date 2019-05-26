import React from 'react'

import Icon from 'components/common/Icon'
import * as S from './MobileHeader.styled'

function MobileHeader() {
  return (
    <S.Header>
      {window.location.pathname !== '/' && (
        <S.BackButton onClick={() => window.history.go(-1)}>
          <Icon icon="ChevronLeft" label="Back" />
        </S.BackButton>
      )}
      <S.Link to="/">Sushi Go Friend</S.Link>
    </S.Header>
  )
}

export default MobileHeader
