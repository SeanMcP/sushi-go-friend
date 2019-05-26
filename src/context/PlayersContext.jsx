import React from 'react'
import usePlayersHook from '../hooks/usePlayers'

const PlayersContext = React.createContext()

export function PlayersProvider({ children }) {
  const Players = usePlayersHook()
  return (
    <PlayersContext.Provider value={Players}>
      {children}
    </PlayersContext.Provider>
  )
}

export function usePlayers() {
  const context = React.useContext(PlayersContext)
  if (!context) {
    throw Error()
  }
  return context
}
