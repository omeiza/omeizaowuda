import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Grid from "./../styles/Grid.module.scss";
import Photo from "./../public/images/profile-img.jpg";
import Layout from '../src/components/Layout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Omeiza Owuda, Software Developer</title>
                <meta name="title" content="Omeiza Owuda, Software Developer" />
                <meta property="og:title" content="Omeiza Owuda, Software Developer" key="title" />
                <meta name="description" content="Personal website &amp; blog of Omeiza Owuda, Software Developer" />
                <meta name="og:description" content="Personal website &amp; blog of Omeiza Owuda, Software Developer" />
                <meta property="og:image" content="https://owudaomeiza.com/images/profile-img.jpg" />
            </Head>
            <Layout image="/images/profile-img.jpg" title="Omeiza Owuda, Software Developer" description="Personal site, blog, and portfolio of Omeiza Owuda, a Software Developer focused on making complex user interfaces appear simple to the users">
                <section id="about-section" className={`about-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <div className="profile-img">
                            <Image className="profile-img" src={Photo} alt="Picture of Omeiza Owuda" layout="responsive" />
                            <p className="img-caption">Credit: Image edited by <Link href="https://www.linkedin.com/in/victor-enesi/" target="_blank">Victor Owuda</Link></p>
                        </div>
                        <div>
                            <p>Hi, my name is Omeiza Owuda. I am a passionate Software Developer who likes to build stuffs that live on the internet. I am proudly from Nigeria and currently live in a big city called Ibadan in Oyo State.</p>
                            <p>This little personal site is a place where I write about:</p>
                            <ol>
                                <li>Things in my personal life I wish to share.</li>
                                <li>Interesting things about my work that could benefit others.</li>
                                <li>Tutorials about software development.</li>
                                <li>Startups and innovation across Africa.</li>
                            </ol>
                            <hr></hr>
                            <h2>Work</h2>
                            <p>I work as a Full-stack software developer with 7 years under my belt building web platforms and softwares across different industries. My favourite stack is <strong>Node</strong> + <strong>Typescript</strong> + <strong>React</strong> + <strong>SASS</strong> + <strong>SQL</strong>.</p>
                            <p>I am very big on design thinking with focus on component based UI development and I tend to demonstrate this by crafting out web products that make use of this, some of which I will often share here.</p>
                            <p>At this stage of my career, I am looking for excitement, fulfilment and opportunities that will get me thinking, researching and breaking boundaries.</p>
                            <p className="button">
                                <Link href="https://www.linkedin.com/in/omeiza-owuda/"><a target="_blank">More about work <span className="link-emoji">↓</span></a></Link>
                            </p>
                            <hr></hr>
                            <h2>Writing</h2>
                            <p>I do not derive a lot of fun when writing, but I want to. I feel writing is the most honest form of expression and communication of ideas. My first real write-up happened when I was in primary school - which is often referred to as middle school. The piece was about my family composition and I felt very happy writing it, but I can&apos;t seem to understand where and when I lost that zeal and passion. This personal site has a blog section which will also serve as an opportunity for me to share my thoughts in written form and improve my writing.</p>
                            <p>I am a very transparent person and I was lucky enough to know a lot of people whose transparency and willingness to share has helped me to learn more about life, career and many other things that has contributed to shaping me.</p>
                        </div>
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
