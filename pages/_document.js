import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,200;0,300;1,200;1,300&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument