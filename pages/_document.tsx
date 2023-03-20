import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-632Z4VQM76"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-632Z4VQM76');
            `,
          }}
        ></script>
      </Head>
      <title>15 Minutes Is Enough!</title>
      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
