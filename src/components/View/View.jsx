import React from 'react'

import Footer from 'components/Footer'
import MobileHeader from 'components/MobileHeader/MobileHeader'
import * as S from './View.styled'

function View({ children }) {
  return (
    <S.Container>
      <MobileHeader />
      <S.Main>
        <S.Content>{children}</S.Content>
      </S.Main>
      <Footer />
    </S.Container>
  )
}

export default View
