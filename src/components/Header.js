import Image from 'next/image';
import Grid from "./../../styles/Grid.module.scss";
import Logo from "./../../public/images/omz-logo.png"

const Header = () => {
    return (
        <>
            <header className={Grid.wrapper}>
                <div className={`${Grid.content} ${Grid.centered}`}>
                    <span>
                        <a href="/" >
                            <Image src={Logo} width={60} height={41} alt="Omeiza Owuda Logo" />
                        </a>
                    </span>
                    <nav>
                        <ul>
                            <li>Blog</li>
                            <li>Portfolio</li>
                            <li>Newsletter</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <style jsx>{`
                header {
                    padding: var(--sp-l) 0;
                }

                nav ul {
                    list-style: none;
                }

                nav li {
                    display: inline-block;
                }
            `}</style>
        </>
    )
}

export default Header;