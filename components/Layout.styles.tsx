import styled, { createGlobalStyle } from 'styled-components'

import { device } from '../styles/device'

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.whiteColor};
    max-width: 100vw;
    margin: 0;
    font-family: Roboto, apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
    border: 0;
  }
`

export const LayoutContainer = styled.div`
  min-width: 320px;
  max-width: 1340px;
  margin: auto;
`

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.foregroundColor};
  display: flex;
  justify-content: center;
  padding: 8px 0;
  @media ${device.desktop} {
    display: block;
    padding: 0;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 54px;
  margin: 0 5px;
  font-weight: normal;
`

export const FooterContainer = styled.footer`
  font-size: 11px;
  max-width: 380px;
  padding: 10px 0;
`
