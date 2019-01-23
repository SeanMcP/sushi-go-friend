import React from 'react'
import { Redirect } from '@reach/router'

import Button from 'components/common/Button'

function PuddingView(props) {
  const [displayRedirect, setDisplayRedirect] = React.useState(false)
  const [mostPudding, setMostPudding] = React.useState([])
  const [fewestPudding, setFewestPudding] = React.useState([])
  function renderPlayers(key) {
    const { players } = props
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <li key={id}>
          <label>
            <input
              type="checkbox"
              name=""
              id={id}
              onChange={setPuddingValue(key)}
            />{' '}
            <span>{player.name}</span>
          </label>
        </li>
      )
    }
    return <ul>{output}</ul>
  }
  function setPuddingValue(key) {
    const state = key === 'most' ? mostPudding : fewestPudding
    const setState = key === 'most' ? setMostPudding : setFewestPudding
    return ({ target: { checked, id } }) => {
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

    setDisplayRedirect(true)
  }
  return (
    <React.Fragment>
      <h2>Don't forget pudding!</h2>
      <h3>Who had the most?</h3>
      {renderPlayers('most')}
      <h3>Who had the fewest?</h3>
      {renderPlayers('fewest')}
      {mostPudding.length > 0 && fewestPudding.length > 0 && (
        <Button onClick={countPudding}>Do the math</Button>
      )}
      {displayRedirect && <Redirect to="/results" noThrow />}
    </React.Fragment>
  )
}

export default PuddingView
