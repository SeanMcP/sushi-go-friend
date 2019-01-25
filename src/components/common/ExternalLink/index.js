import React from 'react'

function ExternalLink({ children, to, ...props }) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default ExternalLink
