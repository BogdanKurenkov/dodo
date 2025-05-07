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

    let lang = 'ru';

    const urlParts = ctx.asPath?.split('/').filter(Boolean);
    if (urlParts?.length && ['kz', 'by', 'ru'].includes(urlParts[0])) {
      lang = urlParts[0];
    } else {
      const cookies = parseCookies(ctx);
      lang = cookies.NEXT_LOCALE || 'ru';
    }

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
    const { lang } = this.props as { lang?: string }; // Safe access

    return (
      <Html lang={lang}>
        <Head>
          <link
            rel="preload"
            href="/fonts/segoe_ui_semibold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}