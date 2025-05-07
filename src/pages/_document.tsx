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
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
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