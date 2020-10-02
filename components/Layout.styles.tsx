import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: black;
    max-width: 100vw;
    margin: 0;
  }
`

export const PageContainer = styled.main`
  min-width: 320px;
  max-width: 1340px;
  margin: auto;
`
