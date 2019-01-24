import React from 'react'

const defaultState = {}
const defaultResults = { '1': 0, '2': 0, '3': 0, pudding: 0 }
// Just for dev purposes
// const defaultState = {
//   1: {
//     name: 'Sean',
//     results: { ...defaultResults }
//   },
//   2: {
//     name: 'Anne',
//     results: { ...defaultResults }
//   }
// }

function usePlayers() {
  const [players, setPlayers] = React.useState(defaultState)
  function addPlayer(value) {
    const playersCopy = { ...players }
    playersCopy[String(new Date().getTime())] = {
      name: value,
      results: { ...defaultResults }
    }
    setPlayers(playersCopy)
  }
  function recordResult(id, round, score) {
    const playersCopy = { ...players }
    const playerCopy = { ...playersCopy[id] }
    playerCopy.results[String(round)] = score
    playersCopy[id] = playerCopy
    setPlayers(playersCopy)
  }
  function removePlayer(id) {
    const playersCopy = { ...players }
    delete playersCopy[id]
    setPlayers(playersCopy)
  }
  function removeAllPlayers() {
    setPlayers({})
  }
  function resetResults(toReturn) {
    const playersCopy = { ...players }
    for (const id in playersCopy) {
      playersCopy[id].results = { ...defaultResults }
    }
    setPlayers(playersCopy)
    return toReturn
  }
  return {
    players,
    setPlayers,
    addPlayer,
    recordResult,
    removePlayer,
    removeAllPlayers,
    resetResults
  }
}

export default usePlayers
