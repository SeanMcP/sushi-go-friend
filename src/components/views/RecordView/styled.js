import styled from 'styled-components'

export const StyledH1 = styled.h1`
  margin-top: 0;
`

export const StyledDivPlayer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  margin-top: 1rem;
`

export const StyledDivPlayerHead = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: space-between;
`

export const StyledDivRounds = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  input {
    padding: 0.5rem 0;
    text-align: center;
    width: 100%;
  }
`
