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
                <meta property="og:title" content={title} key="title" />
                <meta name="description" content={description} />
                <meta content={title} name="title" />
                <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description} />
                <meta name="og:description" content={description} />
                <meta content={image} property="og:image" />
                <meta content={image} property="og:image:secure_url" />
                <meta content={image} property="twitter:image" />
                <meta content="1200" property="og:image:width" />
                <meta content="630" property="og:image:height" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@Mr_Omeiza" />
                <meta content="en" property="og:locale" />
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