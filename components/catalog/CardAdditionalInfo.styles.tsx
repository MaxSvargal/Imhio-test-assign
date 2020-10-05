import styled from 'styled-components'

import { device } from '../../styles/device'

export const CardPicture = styled.img`
  min-width: 100%;
  min-height: 200px;
  object-fit: cover;
`

export const DescText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 16px;
  padding-bottom: 10px;
  @media ${device.desktop} {
    padding-bottom: 0;
  }
`

export const OutlineBox = styled.div`
  background: ${({ theme }) => theme.darkestColor};
  color: ${({ theme }) => theme.whiteColor};
  height: 100vh;
  left: 0;
  line-height: 2rem;
  padding: 5px 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  box-sizing: border-box;
  font-size: 12px;
  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.pinkColor};
    height: auto;
    left: 0;
    margin-top: -2px;
    height: 180px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: auto;
    width: calc(100% - 4px);
    z-index: 1;
    font-size: 14px;
  }
`

export const TagsListSingleLine = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 26px;
  margin: 10px -5px;
`

export const MoreBtn = styled.button`
  height: 28px;
  background: ${({ theme }) => theme.darkGrayColor};
  color: ${({ theme }) => theme.whiteColor};
  border: 0;
  padding: 5px;
  display: block;
  width: 100%;
  border-radius: 3px;
`

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 24px;
  padding: 0 5px;
`

export const CloseBtn = styled.div`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  overflow: hidden;

  &:hover {
    &::before,
    &::after {
      background: red;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    height: 2px;
    margin-top: -2px;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

export const FullInfoBox = styled.div`
  line-height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: inherit;
  overflow: hidden;
  @media ${device.desktop} {
    padding: 5px;
  }
`

export const DefaultBox = styled.div`
  padding: 7px 8px;
`
