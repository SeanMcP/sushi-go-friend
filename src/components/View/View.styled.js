import styled from 'styled-components'

export const Container = styled.div`
  background: ${p => p.theme.FRAME};
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const BORDER_WIDTH = '1rem'

export const Main = styled.main`
  background-color: ${p => p.theme.BACKGROUND};
  border: ${BORDER_WIDTH} solid ${p => p.theme.FRAME};
  border-radius: calc(2 * ${BORDER_WIDTH});
  flex: 1;
  margin: -${BORDER_WIDTH} 0;
  width: calc(100% - calc(2 * ${BORDER_WIDTH}));

  > * {
    margin: 0 1rem;
  }

  > * > *:first-child {
    margin-top: 0;
  }
`

export const Content = styled.div`
  margin: 1rem auto 0;
  max-width: 40rem;
  padding: 1rem;

  > *:first-child {
    margin-top: 0;
  }
`
