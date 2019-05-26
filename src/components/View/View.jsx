import React from 'react'

import Footer from 'components/Footer'
import MobileHeader from 'components/MobileHeader/MobileHeader'
import * as S from './View.styled'

function View({ children, heading }) {
  return (
    <S.Container>
      <MobileHeader />
      <S.Main>
        <S.Content>
          {typeof heading === 'string' ? (
            <h1>
              {heading}
              {heading.slice(-1) !== '!' ? '!' : ''}
            </h1>
          ) : (
            heading
          )}
          {children}
        </S.Content>
      </S.Main>
      <Footer />
    </S.Container>
  )
}

export default View
