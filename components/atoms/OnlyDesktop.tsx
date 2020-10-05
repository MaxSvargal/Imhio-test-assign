import styled from 'styled-components'

import { device } from '../../styles/device'

export const OnlyDesktop = styled.div`
  display: none;
  @media ${device.desktop} {
    display: block;
  }
`
