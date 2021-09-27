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
                            Software Developer
                            <span>BIG CABAL MEDIA</span>
                            <p>I interface with all the departments and my role is to build new products for the company, maintain the two publications (<Link href="https://zikoko.com"><a target="_blank">Zikoko</a></Link> & <Link href="https://techcabal.com"><a target="_blank">TechCabal</a></Link>) and help drive the company forward by providing technical growth support & innovative ideas.</p>
                            <span>SEPT 2020 - NOW</span>
                        </li>
                        <li>Software Developer
                            <span>NOTJUSTOK INC</span>
                            <p>My role was to help the company sustain the development of its streaming platform called <Link href="https://minomusic.co"><a target="_blank">Mino Music</a></Link>. Mino Music is an African music streaming platform owned by <Link href="https://notjustok.com"><a target="_blank">Notjustok</a></Link>. I also did a lot of development work on the publication site.</p>
                            <span>FEB 2018 - NOW</span>
                        </li>
                        <li>
                            Full-stack Developer
                            <span>VENTRA MEDIA GROUP</span>
                            <p>I joined Ventra media group as a Full-stack Developer after working as a Front-end Developer for two years. At the time, Ventra media group’s biggest client was Guardian Nigeria, which is one of the biggest Newspaper and digital news publishing platforms in Nigeria. My role was to help with the development of the digital platform - <Link href="https://guardian.ng" target="_blank">Guardian</Link> and <Link href="https://tv.guardian.ng" target="_blank">Guardian TV</Link>. It was a very demanding project and I learned a lot from the experience.</p>
                            <span>SEPT 2016 - JAN 2018</span>
                        </li>
                        <li>
                            Front-end Developer
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