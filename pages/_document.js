import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
                    <meta property="og:locale" content="en" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Omeiza Owuda, Software Developer" />
                    <meta content="1200" property="og:image:width" />
                    <meta content="630" property="og:image:height" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@Mr_Omeiza" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument