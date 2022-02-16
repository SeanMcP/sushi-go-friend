import React from 'react'
import { useParams } from 'react-router-dom'

import View from 'components/View/View'
import ROUTES from 'constants/routes'
import BigFunLink from 'components/common/BigFunLink'

import * as S from './RoundView.styled'
import { useRedirectToSetup } from 'hooks/useRedirectToSetup'

export default function RoundView({ hasPlayers, players, recordResult }) {
  const { round } = useParams()
  useRedirectToSetup(hasPlayers)
  const content = []
  for (const id in players) {
    const { name, results } = players[id]
    content.push(
      <S.Row key={name}>
        <label htmlFor={name}>{name}</label>
        <span>{calculateTotal(results)}</span>
        <S.Input
          id={name}
          onChange={e => recordResult(id, round, e.target.value)}
          type="number"
          value={results[round] || ''}
        />
      </S.Row>
    )
  }
  return (
    <View heading={`Round ${round}!`}>
      <p>How many points did each player earn this round?</p>
      {content}
      <BigFunLink to={getNext(round)}>Next Round!</BigFunLink>
    </View>
  )
}

function calculateTotal(results) {
  let total = 0
  for (const round in results) {
    total += Number(results[round])
  }
  return `${total} point${total === 1 ? '' : 's'}`
}

function getNext(round) {
  switch (round) {
    case '1':
      return ROUTES.getRound(2)
    case '2':
      return ROUTES.getRound(3)
    case '3':
      return ROUTES.PUDDING
    default:
      return ROUTES.SETUP
  }
}
