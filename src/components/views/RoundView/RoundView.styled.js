import styled from 'styled-components'

export const Row = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;

  label {
    font-weight: bold;
  }

  span {
    text-align: right;
  }

  + div {
    margin-top: 1rem;
  }
`

export const Input = styled.input`
  border: 0;
  font: inherit;
  border-radius: 0.5rem;
  grid-column: 1 / span 2;
  padding: 0.5rem;
  text-align: center;
`
