import React from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import styled from 'styled-components'
import IconButton from '../common/IconButton'
import _ExternalLink from 'components/common/ExternalLink'

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  button {
    height: 48px;
    width: 48px;
  }
`

const ExternalLink = styled(_ExternalLink)`
  color: ${p => p.theme.RED} !important;
`

function useToggle(defaultState = false) {
  const [isOpen, setIsOpen] = React.useState(defaultState)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return [isOpen, toggle]
}

export default function Info() {
  const [isOpen, toggle] = useToggle()

  return (
    <Container>
      <IconButton icon="Info" onClick={toggle} />
      <Dialog isOpen={isOpen} onDismiss={toggle}>
        <p>
          <ExternalLink to="https://gamewright.com/product/Sushi-Go">
            Sushi Go!®
          </ExternalLink>{' '}
          is a registered trademark of{' '}
          <ExternalLink to="https://gamewright.com/">GAMEWRIGHT</ExternalLink>
        </p>
        <p>
          Made by{' '}
          <ExternalLink to="https://seanmcp.com">SeanMcP</ExternalLink>
        </p>
      </Dialog>
    </Container>
  )
}
