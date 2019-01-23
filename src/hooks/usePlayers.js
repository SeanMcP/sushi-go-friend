import React from 'react'

// Just for dev purposes
const defaultState = {
  1: {
    name: 'Sean',
    results: { '1': 0, '2': 0, '3': 0, pudding: 0 }
  },
  2: {
    name: 'Anne',
    results: { '1': 0, '2': 0, '3': 0, pudding: 0 }
  }
}
// const defaultState = {}

function usePlayers() {
  const [players, setPlayers] = React.useState(defaultState)
  function addPlayer(value) {
    const playersCopy = { ...players }
    playersCopy[String(new Date().getTime())] = {
      name: value,
      results: { '1': 0, '2': 0, '3': 0, pudding: 0 }
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
  return {
    players,
    setPlayers,
    addPlayer,
    recordResult,
    removePlayer,
    removeAllPlayers
  }
}

export default usePlayers
