import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/common/Input'

function RecordView(props) {
  const {
    Players: { players, recordResult }
  } = props
  function renderPlayers() {
    const output = []
    for (const id in players) {
      const player = players[id]
      output.push(
        <tr key={id}>
          <td>{player.name}</td>
          {['1', '2', '3'].map(round => (
            <td key={`${id}-${round}`}>
              <Input
                onChange={e => recordResult(id, round, e.target.value)}
                type="number"
                value={player.results[round]}
              />
            </td>
          ))}
          <td>{calculateTotal(player.results)}</td>
        </tr>
      )
    }
    return output
  }
  function calculateTotal(results) {
    let total = 0
    for (const round in results) {
      total += Number(results[round])
    }
    return total
  }
  return (
    <div>
      <h1>Play!</h1>
      <table>
        <tr>
          <th>Player</th>
          <th>Round 1</th>
          <th>Round 2</th>
          <th>Round 3</th>
          <th>Total</th>
        </tr>
        {renderPlayers()}
      </table>
    </div>
  )
}

export default RecordView
