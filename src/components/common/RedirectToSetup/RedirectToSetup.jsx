import React from 'react'
import { Redirect } from '@reach/router'

import ROUTES from 'constants/routes'

function RedirectToSetup() {
  return <Redirect to={ROUTES.SETUP} noThrow />
}

export default RedirectToSetup
