import Header from "./Header";
import {useDarkMode} from "./useDarkMode";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    if (!mountedComponent) return <div />

    return (
        <>
            <main className={theme}>
                <Header theme={theme} toggleTheme={themeToggler} />
                    {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout;