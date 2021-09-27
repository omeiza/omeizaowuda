import Link from 'next/link';
import Grid from "./../../styles/Grid.module.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer" className={`${Grid.wrapper}`}>
                <div className={`footer-info ${Grid.centered}`}>
                    Written, designed, and built by Omeiza Owuda, a Software Developer who you can find on <Link href="https://twitter.com/Mr_Omeiza">Twitter</Link>, <Link href="https://github.com/omeiza">GitHub</Link>, or good old-fashioned <Link href="mailto:owudaomeiza@gmail.com">Email</Link>.
                </div>
            </footer>
            <style jsx>{`
                footer {
                    border-top: 1px solid var(--text-color);
                    padding: var(--sp-m) 0 var(--sp-m);
                    margin-top: var(--sp-xxl);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.35;
                }

                @media (max-width: 50em) {
                    footer {
                        font-size: 14px;
                    }
                }

                .footer-info p {
                    margin: 0;
                }
            `}</style>
        </>
    )
}

export default Footer;