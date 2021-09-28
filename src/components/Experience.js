import Link from 'next/link';
import List from "./../../styles/List.module.scss";

const Experience = () => {
    return (
        <>
            <div id="work-experience" className={`work-experience`}>
                <h2>Work Experience</h2>
                <div>
                    <ul className={List.articles}>
                        <li>
                            <h4>Software Developer</h4>
                            <span>BIG CABAL MEDIA</span>
                            <p>I interface with all the departments and my role is to build new products for the company, maintain the two publications (<Link href="https://zikoko.com"><a target="_blank">Zikoko</a></Link> & <Link href="https://techcabal.com"><a target="_blank">TechCabal</a></Link>) and help drive the company forward by providing technical growth support & innovative ideas.</p>
                            <span>SEPT 2020 - NOW</span>
                        </li>
                        <li>
                            <h4>Software Developer</h4>
                            <span>NOTJUSTOK INC</span>
                            <p>My role was to help the company sustain the development of its streaming platform called <Link href="https://minomusic.co"><a target="_blank">Mino Music</a></Link>. Mino Music is an African music streaming platform owned by Notjustok. I also did a lot of development work on <Link href="https://notjustok.com"><a target="_blank">Notjustok</a></Link>.</p>
                            <span>FEB 2018 - NOW</span>
                        </li>
                        <li>
                            <h4>Full-stack Developer</h4>
                            <span>VENTRA MEDIA GROUP</span>
                            <p>I joined Ventra media group as a Full-stack Developer after working as a Front-end Developer for two years. At the time, Ventra media group’s biggest client was Guardian Nigeria, which is one of the biggest Newspaper and digital news publishing platforms in Nigeria. My role was to help with the development of the digital platform - <Link href="https://guardian.ng" target="_blank">Guardian</Link> and <Link href="https://tv.guardian.ng" target="_blank">Guardian TV</Link>. It was a very demanding project and I learned a lot from the experience.</p>
                            <span>SEPT 2016 - JAN 2018</span>
                        </li>
                        <li>
                            <h4>Front-end Developer</h4>
                            <span>CKDIGITAL</span>
                            <p><Link href="https://ckdigital.net"><a target="_blank">CKDigital</a></Link> was my first shot at working full-time. I was hired as a Front-end Developer with excitement about learning and creating websites that are of industry standard. It was the ultimate learning experience for me. I created alot of websites and also taught coding while I was there.</p>
                            <span>FEB 2015 - AUG 2016</span>
                        </li>
                    </ul>
                    <p className="button">
                        <Link href=""><a target="_blank">Resume <span className="link-emoji-download">↓</span></a></Link>
                    </p>
                </div>
            </div>
            <style jsx>{`
                h4 {
                    margin: 0;
                    font-weight: 500;
                }

                h2 {
                    margin-top: 0;
                    color: #2d2e31;
                }

                .work-experience {
                    margin: var(--sp-l) 0;
                    border-top: 1px solid var(--text-color);
                    border-bottom: 1px solid var(--text-color);
                    background-color: #f5c76a;
                    color: #2d2e31;
                    padding: var(--sp-xl) var(--sp-l);
                }

                li {
                    border-bottom: 1px dashed rgb(185, 125, 0);
                }

                .button a {
                    background-color: #232323;
                    color: #e8e5dd;
                }
            `}</style>
        </>
    )
}

export default Experience;