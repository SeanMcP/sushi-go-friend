import React from 'react'

function usePlayers() {
  const [players, setPlayers] = React.useState([])
  function addPlayer(value) {
    const playersCopy = [...players]
    playersCopy.push({
      id: new Date().getTime(),
      name: value
    })
    setPlayers(playersCopy)
  }
  function removePlayer(id) {
    const filteredPlayers = players.filter(player => player.id !== id)
    setPlayers(filteredPlayers)
  }
  function removeAllPlayers() {
    setPlayers([])
  }
  return {
    players,
    setPlayers,
    addPlayer,
    removePlayer,
    removeAllPlayers
  }
}

export default usePlayers
