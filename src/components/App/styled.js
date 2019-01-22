import styled from 'styled-components'

export const StyledDiv = styled.div`
  background: ${props => props.theme.RED};
  border: 1rem solid black;
  min-height: calc(100vh - 6rem);
  padding: 2rem;
`
