import Head from 'next/head';
import Header from "./Header";
import {useDarkMode} from "./useDarkMode";
import Footer from "./Footer";

const Layout = ({ children, image, title, description }) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    if (!mountedComponent) return <div />

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="title" content={title} />
                <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
                <meta property="og:locale" content="en" />
                <meta property="og:title" content={title} key="title" />
                <meta name="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content="Omeiza Owuda, Software Developer" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Mr_Omeiza" />
                <meta name="twitter:image" content={image} />
            </Head>
            <main className={theme}>
                <Header theme={theme} toggleTheme={themeToggler} />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout;