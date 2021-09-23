import Grid from "./../../styles/Grid.module.scss";

const Experience = () => {
    return (
        <>
            <div id="work-experience" className={`work-experience`}>
                <h2>Work Experience</h2>
                <p>Canela is a display typeface designed by Miguel Reyes and published through Commercial Type in 2016. Reyes began Canela as an interpretation of William Caslon’s display faces but deviated from there into a design that is neither purely a sans-serif nor a serif. The flared stroke endings, which were inspired by his experience with stonecarving, lend the typeface an inscriptional quality. Canela is available in six weights with matching italics. Two new optical sizes, Canela Text and Canela Deck, were added to the family in 2018.</p>
            </div>
            <style jsx>{`
                .work-experience {
                    padding: var(--sp-l) 0;
                    margin: var(--sp-l) 0;
                    border-top: 1px solid var(--text-color);
                    border-bottom: 1px solid var(--text-color);
                }
            `}</style>
        </>
    )
}

export default Experience;