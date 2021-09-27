import Link from 'next/link';
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
                            <p className="img-caption">Credit: Image edited by <Link href="https://www.linkedin.com/in/victor-enesi/" target="_blank">Victor Owuda</Link></p>
                        </div>
                        <div>
                            <p>Daniel Eden is a Design Manager at Facebook in London, supporting Facebook’s Commerce organisation. He spends his time writing, thinking, tweeting, and talking about Design Systems: how they scale, how they break, and the people that maintain them.</p>
                            <p className="button">
                                <Link href="/about"><a>Read more about me <span className="link-emoji">↓</span></a></Link>
                            </p>
                        </div>
                    </div>
                </section>
                {/* <section id="writing-section" className={`writing-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h2>Work Experience</h2>
                        <div>
                            <ul className={List.articles}>
                                <li>
                                    Software Developer
                                    <span>BIG CABAL MEDIA</span>
                                    <p>I interface with all the departments and my role is to build new products for the company, maintain the two publications (Zikoko & TechCabal) and help drive the company forward by providing technical growth support & innovative ideas.</p>
                                    <span>SEPT 2020 - NOW</span>
                                </li>
                                <li>Software Developer
                                    <span>NOTJUSTOK INC</span>
                                    <p>My role was to help the company sustain the development of its streaming platform called <Link href="https://minomusic.co" target="_blank">Mino Music</Link>. Mino Music is an African music streaming platform owned by Notjustok. I also did a lot of development work on the publication site - https://notjustok.com.</p>
                                    <span>FEB 2018 - NOW</span>
                                </li>
                                <li>Full-stack Developer<span>VENTRA MEDIA GROUP</span></li>
                                <li>Front-end Developer<span>CKDIGITAL</span></li>
                            </ul>
                            <p className="button">
                                <a href="">Resume <span className="link-emoji">↓</span></a>
                            </p>
                        </div>
                    </div>
                </section> */}
            </Layout>
            <style jsx>{`
                .about-section {
                    padding: var(--sp-xl) 0 0;
                }

                .about-section > div {
                    padding-bottom: var(--sp-xxl);
                    // border-bottom: 1px solid var(--text-color);
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

                @media (max-width: 50em) {
                    .about-section {
                        padding: 0;
                    }

                    .profile-img .img-caption {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    )
}
