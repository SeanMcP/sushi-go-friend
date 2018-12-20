import React from 'react'

function useView() {
  const [view, setView] = React.useState('players')
  function navigate(viewName) {
    setView(viewName)
  }
  return {
    view,
    setView,
    navigate
  }
}

export default useView
