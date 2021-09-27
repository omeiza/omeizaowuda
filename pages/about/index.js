import Link from 'next/link';
import Image from 'next/image'
import Grid from "./../../styles/Grid.module.scss";
import Experience from '../../src/components/Experience';
import Photo from "./../../public/images/profile-img.jpg";
import Layout from './../../src/components/Layout';

export default function About() {
    return (
        <>
            <Layout>
                <section id="about-section" className={`about-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h1>About</h1>
                        <p>Daniel Eden is a Design Manager at Facebook in London, supporting Facebook’s Commerce organisation. He spends his time writing, thinking, tweeting, and talking about Design Systems: how they scale, how they break, and the people that maintain them.</p>
                        <div className="profile-img">
                            <Image className="profile-img" src={Photo} alt="Picture of Omeiza Owuda" layout="responsive" />
                            <p className="img-caption">Credit: Image edited by <Link href="https://www.linkedin.com/in/victor-enesi/" target="_blank">Victor Owuda</Link></p>
                        </div>
                        <p>When I was a kid, I loved Lego Mindstorms. The model pictured is a lot more sophisticated than what I had as a child, but the concept is the same. The key piece here is the gray brick in the middle; it’s effectively a computer with a motor inside it, which you could plug into a PC and, using something similar to Scratch, you could program it to do different things. By assembling blocks of instructions, you could have it run the motor, which in turn, you might have attached a set of wheels to, and before you know it, you’ve built a robot that can drive around on a tabletop.</p>
                        <p>Daniel Eden is a Design Manager at Facebook in London, supporting Facebook’s Commerce organisation. He spends his time writing, thinking, tweeting, and talking about Design Systems: how they scale, how they break, and the people that maintain them.</p>
                        <Experience />
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .about-section {
                    padding: var(--sp-xxxl) 0 0;
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