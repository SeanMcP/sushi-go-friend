import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  min-height: 100vh;
`

export const StyledMain = styled.main`
  flex: 1;
  padding: 2rem 0;
  overflow-y: auto;
  margin: 0 auto;
  max-width: 40rem;
  width: 100%;

  > div {
    margin: 0 1rem;
  }

  > div > *:first-child {
    margin-top: 0;
  }
`
