import Grid from "./../../styles/Grid.module.scss";
import LightSwitch from './LightSwitch';

const Header = () => {
    return (
        <>
            <header id="header" className={`${Grid.wrapper}`}>
                <h1>omeiza<span>_</span></h1>
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
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 0.95;
                }
            `}</style>
        </>
    )
}

export default Header;