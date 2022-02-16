const routes = {
  HOME: '/',
  PUDDING: '/round/pudding',
  RESULTS: '/results',
  ROUND: '/round/:round',
  SETUP: '/setup'
}

routes.getRound = round => routes.ROUND.replace(':round', round)

export default routes
