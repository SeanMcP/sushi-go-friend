import React from 'react'

import BigFunLink from 'components/common/BigFunLink'
import View from 'components/View/View'
import ROUTES from 'constants/routes'
import { useRedirectToSetup } from 'hooks/useRedirectToSetup'

import { StyledLi, StyledOl, StyledItemContainer } from './styled'

function PlayerListItem({ player, value }) {
  return (
    <StyledLi value={value}>
      <StyledItemContainer>
        <span>{player.name}</span>
        <span>{player.total} pts</span>
      </StyledItemContainer>
    </StyledLi>
  )
}

function rankPlayers(players) {
  const byTotal = {}
  for (const id in players) {
    const player = players[id]
    const total = totalResults(player.results)
    if (!byTotal[total]) byTotal[total] = []
    byTotal[total].push({
      name: player.name,
      total,
      id
    })
  }
  const totals = Object.keys(byTotal).map(total => Number(total))
  totals.sort((a, b) => (a < b ? 1 : -1))

  return totals.map(total => byTotal[total])
}

function totalResults(results) {
  let total = 0
  for (const round in results) {
    total += Number(results[round])
  }
  return total
}

function renderTitle(rankings) {
  const first = rankings[0]
  if (!first) return 'Uh oh!'
  if (first.length > 1) return 'And the winners are...'
  return 'And the winner is...'
}

function ResultsView({ hasPlayers, players, resetResults }) {
  useRedirectToSetup(hasPlayers)
  const rankings = rankPlayers(players)

  return (
    <View heading="Results">
      <h2>{renderTitle(rankings)}</h2>
      <StyledOl>
        {rankings.map((ranking, i) =>
          ranking.map(player => (
            <PlayerListItem key={player.id} player={player} value={i + 1} />
          ))
        )}
      </StyledOl>
      <BigFunLink onClick={resetResults} to={ROUTES.ROUND.replace(':round', 1)}>
        Play again?
      </BigFunLink>
    </View>
  )
}

export default ResultsView
