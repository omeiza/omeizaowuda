import Grid from "./../../styles/Grid.module.scss";

const Header = () => {
    return (
        <>
            <header className={Grid.wrapper}>
                <span>
                    <a href="/" >Omeiza Owuda, Software Developer</a>
                </span>
                <nav>
                    <ul>
                        <li>Blog</li>
                        <li>Portfolio</li>
                        <li>Newsletter</li>
                    </ul>
                </nav>
            </header>
            <style jsx>{`
                header {
                    
                }
            `}</style>
        </>
    )
}

export default Header;