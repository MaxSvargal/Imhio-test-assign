import Head from 'next/head'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/theme'
import { GlobalStyle, PageContainer } from './Layout.styles'

interface IProps {
  title?: string
}

const Layout: FC<IProps> = ({ children, title = 'This is the default title' }) => (
  <ThemeProvider theme={defaultTheme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preload" href="/api/items" as="fetch" crossOrigin="anonymous"></link>
    </Head>
    <header>
      <h1>OZEEX</h1>
    </header>
    <GlobalStyle />
    <PageContainer>{children}</PageContainer>
    <footer>
      <hr />
      <span>
        Disclaimer: All models are 18 years or older. All porn galleries and links to sex videos are
        provided by 3rd parties. We have no control over the content of these pages. We take no
        responsibility for the content on any website which we link to, please use your own
        discretion while surfing the porn links. And we are proudly labeled with the RTA.
      </span>
    </footer>
  </ThemeProvider>
)

export default Layout
