import React from 'react'
import styled from 'styled-components'

export default function ContentContainer({ as = 'div', ...props }) {
    const Element = styled[as]`
        padding: 1rem;
        margin: 0 auto;
        max-width: 38rem;
        width: calc(100% - 2rem);
    `
    return <Element {...props} />
}