import Link from 'next/link';
import Image from 'next/image'
import Grid from "./../../styles/Grid.module.scss";
import Experience from '../../src/components/Experience';
import Photo from "./../../public/images/profile-img.jpg";
import Layout from './../../src/components/Layout';

export default function About() {
    return (
        <>
            <Layout image="/images/profile-img.jpg" title="About | Omeiza Owuda, Software Developer" description="Personal site, blog, and portfolio of Omeiza Owuda, a Software Developer focused on making complex user interfaces appear simple to the users">
                <section id="about-section" className={`about-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h1>About</h1>
                        <p>Omeiza is a Software Developer based in Lagos, Nigeria who allowed his curiosity to drive him into working on both the Front-end and Back-end of the web, which has resulted in 6 years of experience working for and with companies to help build web products.</p>
                        <p>He loves coding, design, and tinkering around finding simple solutions to complex problems which he intends to share on this site as well as document his career and interests.</p>
                        <div className="profile-img">
                            <Image className="profile-img" src={Photo} alt="Picture of Omeiza Owuda" layout="responsive" />
                            <p className="img-caption">Credit: Image edited by <Link href="https://www.linkedin.com/in/victor-enesi/" target="_blank">Victor Owuda</Link></p>
                        </div>
                        <h2>How it all started</h2>
                        <p>He had a dream of becoming a Quantity Surveyor, but during his second year in college, he took a Fortran programming class and got hooked. The idea of being able to provide a set of instructions to a computer to perform some tasks excited him.</p>
                        <p>His hunger for success and need to make good web products has pushed him through the years to work as a freelance web designer, a front-end developer, and a full-stack developer, but he enjoys working on the front-end the most.</p>
                        <h2>Career</h2>
                        <p>Coming from an unconventional background, Omeiza made himself a lifelong learner. He constantly wants to learn new tools to improve his work and seeks mentorship from people that are more experienced than him.</p>
                        <p>He currently works at Big Cabal Media as a Software Developer to help the company build new web products, and maintain the current publishing platforms & products.</p>
                        <Experience />
                        <h2>Interests</h2>
                        <p>Omeiza&apos;s desire is to focus on building complex UI with code and make it easier for users to use. He is an advocate of using minimalism and simplicity to solve user&apos;s needs. In other to achieve this, he is currently learning more about UI development and Front-end Engineering as a whole.</p>
                        <p>Outside of work, he likes spending time with his loved ones and listening to podcasts about startup growth & Africa&apos;s startup ecosystem.</p>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .about-section {
                    padding: var(--sp-xxl) 0 0;
                }

                h2 {
                    margin-top: var(--sp-xl);
                }

                .about-section > div {
                    padding-bottom: var(--sp-xxl);
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
                    .profile-img .img-caption {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    )
}