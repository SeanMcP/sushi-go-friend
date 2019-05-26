import React from 'react'

import Icon from 'components/common/Icon'
import * as S from './MobileHeader.styled'
import ROUTES from 'constants/routes'

const previousMap = {
  [ROUTES.SETUP]: ROUTES.HOME,
  [ROUTES.PLAY]: ROUTES.SETUP,
  [ROUTES.PUDDING]: ROUTES.PLAY,
  [ROUTES.RESULTS]: ROUTES.PUDDING
}

function MobileHeader() {
  const { pathname } = window.location
  return (
    <S.Header>
      {pathname !== ROUTES.HOME && (
        <S.BackLink to={previousMap[pathname]}>
          <Icon icon="ChevronLeft" label="Back" />
        </S.BackLink>
      )}
      <S.Link to={ROUTES.HOME}>Sushi Go Friend</S.Link>
    </S.Header>
  )
}

export default MobileHeader
