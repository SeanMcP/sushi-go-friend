import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import View from 'components/View/View'
import { useRedirectToSetup } from 'hooks/useRedirectToSetup'
import ROUTES from 'constants/routes'

import { H2, StyledLabel, StyledUl } from './styled'

function PuddingView({ hasPlayers, numberOfPlayers, players, recordResult }) {
  const [mostPudding, setMostPudding] = React.useState([])
  const [fewestPudding, setFewestPudding] = React.useState([])
  useRedirectToSetup(hasPlayers)

  function renderPlayers(key) {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <li key={id}>
          <StyledLabel>
            <input
              type="checkbox"
              name={`${id}-${key}`}
              id={`${id}-${key}`}
              onChange={setPuddingValue(key, id)}
            />{' '}
            <span>{player.name}</span>
          </StyledLabel>
        </li>
      )
    }
    return <StyledUl>{output}</StyledUl>
  }

  function setPuddingValue(key, id) {
    const state = key === 'most' ? mostPudding : fewestPudding
    const setState = key === 'most' ? setMostPudding : setFewestPudding
    return ({ target: { checked } }) => {
      const copy = [...state]
      if (checked) {
        copy.push(id)
        setState(copy)
      } else {
        setState(copy.filter(_id => _id !== id))
      }
    }
  }

  function countPudding() {
    const pointsForMost = 6 / mostPudding.length
    const pointsForFewest = -6 / fewestPudding.length

    const scores = {}
    mostPudding.forEach(id => {
      if (!scores[id]) scores[id] = 0
      scores[id] += pointsForMost
    })
    fewestPudding.forEach(id => {
      if (!scores[id]) scores[id] = 0
      scores[id] += pointsForFewest
    })

    for (const id in scores) {
      recordResult(id, 'pudding', scores[id])
    }
  }
  return (
    <View heading="Don't forget the pudding">
      <H2>Who had the most?</H2>
      {renderPlayers('most')}
      <H2>Who had the fewest?</H2>
      {renderPlayers('fewest')}
      {((mostPudding.length > 0 && fewestPudding.length > 0) ||
        mostPudding.length === numberOfPlayers) && (
        <BigFunLink onClick={countPudding} to={ROUTES.RESULTS}>
          Do the math!
        </BigFunLink>
      )}
    </View>
  )
}

export default PuddingView
