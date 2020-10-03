import styled from 'styled-components'

export const OnlyDesktop = styled.div`
  display: none;
  @media (min-width: 480px) {
    display: block;
  }
`
