import styled, { css } from 'styled-components'

export const StyledOl = styled.ol`
  display: grid;
  grid-gap: 0.5rem;
  padding-left: 1.5rem;
`

export const StyledLi = styled.li`
  ${props =>
    props.value === 1 &&
    css`
      color: ${p => p.theme.ORANGE};
      font-weight: bold;
    `}
`

export const StyledItemContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
