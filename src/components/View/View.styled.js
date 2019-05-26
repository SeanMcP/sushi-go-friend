import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.RED};
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 40rem;
  width: 100%;

  > * {
    margin: 0 1rem;
  }

  > * > *:first-child {
    margin-top: 0;
  }
`

export const Content = styled.div`
  margin: 0 1rem;

  > *:first-child {
    margin-top: 0;
  }
`
