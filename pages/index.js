import Image from 'next/image';
import Grid from "./../styles/Grid.module.scss";
import List from "./../styles/List.module.scss";
import Photo from "./../public/images/profile-img.jpg";
import Layout from '../src/components/Layout';

export default function Home() {
    return (
        <>
            <Layout>
                <section id="about-section" className={`about-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <div className="profile-img">
                            <Image className="profile-img" src={Photo} alt="Picture of Omeiza Owuda" layout="responsive" />
                            <p className="img-caption">Credit: Daniel Eden is a Design Manager at Facebook 3×3 GTD: A Priority-Driven To Do List</p>
                        </div>
                        <div>
                            <p>Daniel Eden is a Design Manager at Facebook in London, supporting Facebook’s Commerce organisation. He spends his time writing, thinking, tweeting, and talking about Design Systems: how they scale, how they break, and the people that maintain them.</p>
                            <p className="button">
                                <a href="">Read more about me <span className="link-emoji">↓</span></a>
                            </p>
                        </div>
                    </div>
                </section>
                <section id="writing-section" className={`writing-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h2>Select Writing</h2>
                        <div>
                            <ul className={List.articles}>
                                <li><a href="">3 Strategies For Effective Cross-Team Collaboration</a><span>APRIL 6, 2020</span></li>
                                <li><a>3×3 GTD: A Priority-Driven To Do List</a><span>MAY 26, 2020</span></li>
                                <li><a>Square Peg, Round Hole: Typed Programming For Designers</a><span>JUNE 6, 2020</span></li>
                            </ul>
                            <p className="button">
                                <a href="">Visit Blog <span className="link-emoji">↓</span></a>
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .about-section {
                    padding: var(--sp-xl) 0 0;
                    
                }

                .about-section > div {
                    padding-bottom: var(--sp-xxl);
                    border-bottom: 1px solid var(--text-color);
                }

                .writing-section {
                    padding: var(--sp-xl) 0;
                }

                .profile-img {
                    margin: var(--sp-xl) auto;
                    width: 100%;
                    max-width: 400px;
                }

                .profile-img .img-caption {
                    margin: var(--sp-xs) 0;
                    font-size: 13px;
                    font-family: var(--font-sans);
                    line-height: 1.25;
                }
            `}</style>
        </>
    )
}
