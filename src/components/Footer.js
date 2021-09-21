import Image from 'next/image';
import Grid from "./../../styles/Grid.module.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer" className={`${Grid.wrapper}`}>
                <div>
                    Hello
                </div>
                <div className={`${Grid.wrapper}`}>
                    Hello
                </div>
                <p className="site-copyright">© Omeiza Owuda</p>
            </footer>
            <style jsx>{`
                footer {
                    padding: var(--sp-xxl) 0 var(--sp-l);
                }

                .site-copyright {
                    font-weight: 700;
                    writing-mode: vertical-lr;
                    font-size: 14px;
                    -ms-flex-item-align: end;
                    align-self: flex-end;
                    -webkit-transform: rotate(180deg);
                    -ms-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
            `}</style>
        </>
    )
}

export default Footer;