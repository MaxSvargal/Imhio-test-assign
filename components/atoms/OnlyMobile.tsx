import styled from 'styled-components'

import { device } from '../../styles/device'

export const OnlyMobile = styled.div`
  display: block;
  @media ${device.desktop} {
    display: none;
  }
`
