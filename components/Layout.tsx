import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';

type Props = {
  children?: ReactNode
  title?: string
}

const TextSecond = styled.text<{disabled: boolean}>`
  color: ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.primaryColor};
`;

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <TextSecond disabled={true}>Foo</TextSecond>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </ThemeProvider>
)

export default Layout
