import Grid from "./../../styles/Grid.module.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer" className={`${Grid.wrapper}`}>
                <div className={`footer-info ${Grid.centered}`}>
                    Written, designed, and built by Omeiza Owuda, a Software Developer who you can find on <a href="">Twitter</a>, <a href="">GitHub</a>, or good old-fashioned <a href="">Email</a>.
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

                .footer-info p {
                    margin: 0;
                }

                footer a {
                    text-decoration: underline;
                    font-weight: 500;
                    transition: color .2s;
                }

                footer a:hover {
                    color: var(--text-color-hover);
                }
            `}</style>
        </>
    )
}

export default Footer;