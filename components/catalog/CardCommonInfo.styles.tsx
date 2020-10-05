import styled from 'styled-components'

import { device } from '../../styles/device'

export const CardCommonInfoContainer = styled.div<{ inline: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  font-size: ${({ inline }) => (inline ? 10 : 14)}px;
  line-height: 2em;
  font-size: 12px;
  padding-top: 10px;
  @media ${device.desktop} {
    line-height: ${({ inline }) => (inline ? 1.4 : 2.4)}em;
    padding: 5px 0;
  }
`
