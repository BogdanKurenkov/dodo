import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { JSX } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';

interface MyDocumentInitialProps extends DocumentInitialProps {
  lang?: string;
}

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<MyDocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const cookies = parseCookies(ctx);
    const lang = cookies.NEXT_LOCALE || 'ru';

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        lang,
        styles: (
          <>
            {sheet.getStyleElement()}
            {initialProps.styles}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    const { lang } = this.props as { lang?: string };

    return (
      <Html lang={lang}>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}