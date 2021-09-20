import Grid from "./../../styles/Grid.module.scss";

const Newsletter = () => {
    return (
        <>
            <aside id="newsletter-section" className={`newsletter-section ${Grid.wrapper}`}>
                <div className={Grid.content}>
                    <h2>Newsletter</h2>
                </div>
            </aside>
            <style jsx>{`
                .newsletter-section {
                    padding: var(--sp-xxxl) 0;
                    background-color: #69769d;;
                }

                h2 {
                    color: var(--white);
                }
            `}</style>
        </>
    )
}

export default Newsletter;