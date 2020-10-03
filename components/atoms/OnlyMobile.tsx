import styled from 'styled-components'

export const OnlyMobile = styled.div`
  display: block;
  @media (min-width: 480px) {
    display: none;
  }
`
