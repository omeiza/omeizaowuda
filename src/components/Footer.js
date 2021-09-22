import Image from 'next/image';
import Grid from "./../../styles/Grid.module.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer" className={`${Grid.wrapper}`}>
                <div className="footer-info">
                    <p>Written, designed, and built by Omeiza Owuda, a Software Developer who you can find on Twitter, GitHub, or good old-fashioned Email.</p>
                </div>
                <div className={`${Grid.wrapper}`}>
                    
                </div>
                <p className="site-copyright">© Omeiza Owuda</p>
            </footer>
            <style jsx>{`
                footer {
                    padding: var(--sp-xxl) 0 var(--sp-l);
                }

                .site-copyright {
                    font-weight: 500;
                    writing-mode: vertical-lr;
                    font-size: 14px;
                    align-self: flex-start;
                    -webkit-transform: rotate(180deg);
                    -ms-transform: rotate(180deg);
                    transform: rotate(180deg);
                }

                .footer-info {
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 1.35;
                }
            `}</style>
        </>
    )
}

export default Footer;