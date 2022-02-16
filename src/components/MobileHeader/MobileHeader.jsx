import React from 'react'

import Icon from 'components/common/Icon'
import * as S from './MobileHeader.styled'
import ROUTES from 'constants/routes'

const previousMap = {
  [ROUTES.SETUP]: ROUTES.HOME,
  [ROUTES.PUDDING]: ROUTES.getRound(3),
  [ROUTES.getRound(1)]: ROUTES.SETUP,
  [ROUTES.getRound(2)]: ROUTES.getRound(1),
  [ROUTES.getRound(3)]: ROUTES.getRound(2),
  [ROUTES.RESULTS]: ROUTES.PUDDING
}

function MobileHeader() {
  const { pathname } = window.location
  return (
    <S.Header>
      {pathname !== ROUTES.HOME && (
        <S.BackLink
          aria-label="Back"
          to={previousMap[pathname] || ROUTES.SETUP}
        >
          <Icon icon="ChevronLeft" />
        </S.BackLink>
      )}
      <S.Link to={ROUTES.HOME}>Sushi Go! Friend</S.Link>
    </S.Header>
  )
}

export default MobileHeader
