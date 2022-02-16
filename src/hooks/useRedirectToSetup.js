import React from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from 'constants/routes'

export function useRedirectToSetup(hasPlayers) {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!hasPlayers) navigate(ROUTES.SETUP)
  })
}
