import Image from 'next/image';
import Grid from "./../../styles/Grid.module.scss";

const Header = () => {
    return (
        <>
            <header id="header" className={`${Grid.wrapper}`}>
                <div>
                    <h1>omeiza. <em>Software Developer</em></h1>
                </div>
            </header>
            <style jsx>{`
                header {
                    padding: var(--sp-s) 0;
                }

                h1 {
                    font-family: var(--font-body);
                    position: fixed;
                    left: var(--sp-l);
                    top: var(--sp-l);
                    font-weight: 700;
                    font-size: var(--sp-l);
                    line-height: 0.95;
                }

                h1 em {
                    font-size: var(--sp-s);
                    display: block;
                    font-weight: 400;
                    
                }
            `}</style>
        </>
    )
}

export default Header;