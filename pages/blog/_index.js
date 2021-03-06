import Grid from "./../../styles/Grid.module.scss";
import List from "./../../styles/List.module.scss";
import Layout from '../../src/components/Layout';

export default function Blog() {
    return (
        <>
            <Layout>
                <section id="writing-section" className={`writing-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h1>Blog</h1>
                        <div>
                            <ul className={List.articles}>
                                <li><a href="">3 Strategies For Effective Cross-Team Collaboration</a><span>APRIL 6, 2020</span></li>
                                <li><a>3×3 GTD: A Priority-Driven To Do List</a><span>MAY 26, 2020</span></li>
                                <li><a>Building a Coin-Tossing Simulator with React, Hooks, and Vercel: Part 3</a><span>FEBRUARY 6, 2020</span></li>
                                <li><a>Square Peg, Round Hole: Typed Programming For Designers</a><span>JUNE 6, 2020</span></li>
                                <li><a>Designing And Building For Systems</a><span>MARCH 26, 2020</span></li>
                                <li><a>The Landscape of Web Typography</a><span>FEB 15, 2020</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .writing-section {
                    padding: var(--sp-xl) 0;
                }

                .profile-img {
                    margin: var(--sp-xl) auto;
                    width: 100%;
                    max-width: 400px;
                }
            `}</style>
        </>
    )
}