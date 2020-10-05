import styled from 'styled-components'

import { device } from '../../styles/device'

export const GallerySliderContainer = styled.div`
  height: 200px;
  @media ${device.desktop} {
    height: 180px;
  }
`

export const GallerySliderPicture = styled.img`
  min-width: 100%;
  min-height: 178px;
  object-fit: cover;
`
