import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  color: ${p => p.theme.RED};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: min-content auto;
  padding: 1rem;

  a {
    color: ${p => p.theme.RED};
  }
`

export const Message = styled.p`
  margin: 0;
`
