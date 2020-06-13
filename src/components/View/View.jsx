import React from 'react'

import Footer from 'components/Footer'
import MobileHeader from 'components/MobileHeader/MobileHeader'
import ContentContainer from 'components/common/ContentContainer'
import * as S from './View.styled'

function View({ children, heading }) {
  return (
    <S.Container>
      <MobileHeader />
      <ContentContainer as="main" style={{ flex: 1 }}>
        {typeof heading === 'string' ? (
          <h1>
            {heading}
            {heading.slice(-1) !== '!' ? '!' : ''}
          </h1>
        ) : (
          heading
        )}
        {children}
      </ContentContainer>
      <Footer />
    </S.Container>
  )
}

export default View
