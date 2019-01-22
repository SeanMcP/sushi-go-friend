import styled from 'styled-components'

export const StyledDiv = styled.div`
  background: ${props => props.theme.RED};
  border: 1rem solid black;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 5rem);
  min-height: calc(100vh - 5rem);
  padding: 2rem 2rem 1rem;
`

export const StyledMain = styled.main`
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;

  > *:first-child {
    margin-top: 0;
  }
`
