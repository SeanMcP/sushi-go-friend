import styled from 'styled-components'

export const StyledDiv = styled.div`
  background: var(--RED);
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const StyledMain = styled.main`
  flex: 1;
  padding: 1rem 0;
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
