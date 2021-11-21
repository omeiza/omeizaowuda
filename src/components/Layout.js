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
                <meta property="og:title" content={title} key="title" />
                <meta name="og:description" content={description} />
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