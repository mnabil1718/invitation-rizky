import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.cdnfonts.com" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}