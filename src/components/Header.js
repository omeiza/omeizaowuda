import Link from 'next/link';
import Grid from "./../../styles/Grid.module.scss";
import LightSwitch from './LightSwitch';

const Header = ({theme,  toggleTheme}) => {
    return (
        <>
            <header id="header" className={`${Grid.wrapper}`}>
                <Link href="/">
                    <a className="header-text">
                        <h1>
                            Omeiza
                            <svg className="svg-star" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.27 9.03L8.55 7.41L5.22 4.71L9.51 4.47L8.64 1.83L5.04 4.11L6.15 0H3.33L4.41 4.11L0.84 1.83L0 4.47L4.23 4.71L0.93 7.41L3.21 9.03L4.74 5.1L6.27 9.03Z" transform="matrix(1,0,0,1,0,0)"></path> </svg>
                        </h1>
                    </a>
                </Link>
                <LightSwitch theme={theme} toggleTheme={toggleTheme} />
            </header>
            <style jsx>{`
                header {
                    padding: var(--sp-s) 0;
                }

                .header-text {
                    display: block;
                    position: fixed;
                    left: var(--sp-xl);
                    top: var(--sp-xl);
                    
                }

                .header-text h1 {
                    font-weight: 500;
                    font-size: 40px;
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin: -10px 0 0;
                }

                .svg-star {
                    opacity: 1; 
                    position: absolute;
                    top: -5px;
                    width: 18px;
                    right: -20px;
                    visibility: inherit; 
                    -webkit-animation:spin 4s linear infinite;
                    -moz-animation:spin 4s linear infinite;
                    animation:spin 4s linear infinite;
                }

                .svg-star path {
                    transform-origin: 0px 0px;
                    fill: var(--text-color);
                }

                @-moz-keyframes spin { 
                    100% { -moz-transform: rotate(360deg); } 
                }

                @-webkit-keyframes spin { 
                    100% { -webkit-transform: rotate(360deg); } 
                }

                @keyframes spin { 
                    100% { 
                        -webkit-transform: rotate(360deg); 
                        transform:rotate(360deg); 
                    } 
                }
            `}</style>
        </>
    )
}

export default Header;