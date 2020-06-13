import React from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import styled from 'styled-components'
import IconButton from '../common/IconButton'
import _ExternalLink from 'components/common/ExternalLink'
import { HOVER_FOCUS_ACTIVE_STYLES } from 'components/MobileHeader/MobileHeader.styled'

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  button {
    border: 0;
    height: 48px;
    outline-color: transparent;
    width: 48px;

    ${HOVER_FOCUS_ACTIVE_STYLES}
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

const style = {
  dialog: {
    borderRadius: '1rem',
    maxWidth: '36rem',
    position: 'relative',
    width: '60vw'
  },
  heading: {
    marginTop: 0,
  },
  iconButton: {
    color: 'gray',
    position: 'absolute',
    right: '0.75rem',
    top: '0.75rem'
  }
}

export default function Info() {
  const [isOpen, toggle] = useToggle()

  return (
    <Container>
      <IconButton icon="Info" label="Info" onClick={toggle} hideLabel />
      <Dialog
        aria-label="Info"
        isOpen={isOpen}
        onDismiss={toggle}
        style={style.dialog}
      >
        <IconButton
          icon="X"
          label="Close"
          onClick={toggle}
          style={style.iconButton}
          hideLabel
        />
        <h2 style={style.heading}>Sushi Go Friend!</h2>
        <p>
          The companion app for Sushi Go! made by{' '}
          <ExternalLink to="https://seanmcp.com">SeanMcP</ExternalLink>.
        </p>
        <p>If you liked this app, share it with a friend!</p>
        <h3>Legal</h3>
        <p>
          <ExternalLink to="https://gamewright.com/product/Sushi-Go">
            Sushi Go!®
          </ExternalLink>{' '}
          is a registered trademark of{' '}
          <ExternalLink to="https://gamewright.com/">GAMEWRIGHT</ExternalLink>.
        </p>
      </Dialog>
    </Container>
  )
}
