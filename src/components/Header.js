import Image from 'next/image';
import Grid from "./../../styles/Grid.module.scss";
import LightSwitch from './LightSwitch';

const Header = () => {
    return (
        <>
            <header id="header" className={`${Grid.wrapper}`}>
                <h1>👋 omeiza. <em>full-stack web developer</em></h1>
                <LightSwitch />
            </header>
            <style jsx>{`
                header {
                    padding: var(--sp-s) 0;
                }

                h1 {
                    font-family: var(--font-body);
                    position: fixed;
                    left: var(--sp-xl);
                    top: var(--sp-xl);
                    font-weight: 700;
                    font-size: var(--sp-l);
                    line-height: 0.95;
                }

                h1 em {
                    font-size: var(--sp-s);
                    display: block;
                    font-weight: 400;
                    margin-top: 5px;
                }
            `}</style>
        </>
    )
}

export default Header;