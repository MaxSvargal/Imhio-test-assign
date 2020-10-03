import { DocumentContext } from 'next/dist/next-server/lib/utils'
import Document, { DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
import type {} from 'styled-components/cssprop'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
