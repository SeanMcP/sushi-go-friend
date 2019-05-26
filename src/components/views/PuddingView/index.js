import React from 'react'
import { Redirect } from '@reach/router'

import BigFunLink from 'components/common/BigFunLink'
import RedirectToSetup from 'components/common/RedirectToSetup/RedirectToSetup'
import View from 'components/View/View'

import ROUTES from 'constants/routes'

import { StyledH3, StyledLabel, StyledUl } from './styled'

function PuddingView({ hasPlayers, numberOfPlayers, players, recordResult }) {
  if (!hasPlayers) {
    return <RedirectToSetup />
  }
  const [mostPudding, setMostPudding] = React.useState([])
  const [fewestPudding, setFewestPudding] = React.useState([])
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

    mostPudding.forEach(id => recordResult(id, 'pudding', pointsForMost))
    fewestPudding.forEach(id => recordResult(id, 'pudding', pointsForFewest))
  }
  return (
    <View>
      <h2>Pudding!</h2>
      <StyledH3>Who had the most?</StyledH3>
      {renderPlayers('most')}
      <StyledH3>Who had the fewest?</StyledH3>
      {renderPlayers('fewest')}
      {((mostPudding.length > 0 && fewestPudding.length > 0) ||
        mostPudding.length === numberOfPlayers) && (
        <BigFunLink
          onClick={countPudding}
          to={ROUTES.RESULTS}
          translation="Do the math!"
        >
          計算する!
        </BigFunLink>
      )}
    </View>
  )
}

export default PuddingView
