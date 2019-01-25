import React from 'react'
import { Redirect } from '@reach/router'

import BigFunLink from 'components/common/BigFunLink'
import { StyledH3, StyledLabel, StyledUl } from './styled'

function PuddingView(props) {
  if (!Object.keys(props.players).length) {
    return <Redirect to="/setup" noThrow />
  }
  const [mostPudding, setMostPudding] = React.useState([])
  const [fewestPudding, setFewestPudding] = React.useState([])
  function renderPlayers(key) {
    const { players } = props
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

    const { recordResult } = props

    mostPudding.forEach(id => recordResult(id, 'pudding', pointsForMost))
    fewestPudding.forEach(id => recordResult(id, 'pudding', pointsForFewest))
  }
  return (
    <React.Fragment>
      <h2>Pudding!</h2>
      <StyledH3>Who had the most?</StyledH3>
      {renderPlayers('most')}
      <StyledH3>Who had the fewest?</StyledH3>
      {renderPlayers('fewest')}
      {((mostPudding.length > 0 && fewestPudding.length > 0) ||
        mostPudding.length === Object.keys(props.players).length) && (
        <BigFunLink
          onClick={countPudding}
          to="/results"
          translation="Do the math!"
        >
          計算する!
        </BigFunLink>
      )}
    </React.Fragment>
  )
}

export default PuddingView
