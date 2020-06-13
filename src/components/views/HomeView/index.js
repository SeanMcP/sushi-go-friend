import React from 'react'

import View from 'components/View/View'
import ExternalLink from 'components/common/ExternalLink'
import BigFunLink from 'components/common/BigFunLink'
import Message from '../../common/Message/Message'

import ROUTES from 'constants/routes'

function HomeView() {
  return (
    <View heading="Let's play">
      <p>
        I'm a simple companion app for{' '}
        <ExternalLink to="https://gamewright.com/product/Sushi-Go">
          Sushi Go!
        </ExternalLink>
        , a fast-playing card game by{' '}
        <ExternalLink to="https://gamewright.com/">GAMEWRIGHT</ExternalLink>.
      </p>
      <Message>
        <b>You need the card game to use this app</b>. If you don't have it, you
        can buy it from{' '}
        <ExternalLink to="https://gamewright.shptron.com/p/sushi-go?pp=8">
          GAMEWRIGHT
        </ExternalLink>{' '}
        , on{' '}
        <ExternalLink to="https://www.amazon.com/Sushi-Go-Pick-Pass-Card/dp/B00J57VU44/ref=sr_1_2">
          Amazon
        </ExternalLink>
        , or your local game shop.
      </Message>
      <p>
        If <b>you do have the game</b>, let's get started!
      </p>
      <BigFunLink to={ROUTES.SETUP}>Setup!</BigFunLink>
    </View>
  )
}

export default HomeView
