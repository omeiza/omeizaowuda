import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resume",
    description: "Work background, skills, and accomplishments",
    openGraph: {
        title: "Resume",
        description: "Work background, skills, and accomplishments",
        url: "https://omeizaowuda.com/resume",
        images: [
            {
                url: "https://omeizaowuda.com/uploads/social-og-img.jpg",
            },
        ],
    },
}

export default function ResumePage() {
    return (
        <>
            <h1>Resume</h1>
            <p>Experienced Software Developer with over 8 years of experience in designing and building scalable platforms for music, news, and analytics applications. Skilled in TypeScript, Python, React.js, and AWS, with a proven track record of delivering high-impact solutions to global audiences.</p>
            <div>
                <h2>Notjustok LLC</h2>
                <div>
                    <h3>Principal Software Developer / May 2023 - Present</h3>
                    <ul>
                        <li>Developed Notjustok Distribution’s music artist reporting platform that analyzes music data and processes individual artist royalties from Spotify and Apple Music.</li>
                        <li>Built the African Cup of Nations 2023 Predict N’ Win app, enabling football enthusiasts across Africa to engage with predictions reaching thousands of active users.</li>
                        <li>Designed and developed Songcial, an analytics platform for music creators.</li>
                        <li>Managed and implemented server migrations, maintenance, deployments, and artist data protection.</li>
                    </ul>
                </div>
                <div>
                    <h3>Senior Software Developer / Feb 2018 - Apr 2023</h3>
                    <ul>
                        <li>Built the front-end and API for Mino Music, integrating Audible Magic’s audio content recognition (ACR) to prevent copyright violations.</li>
                        <li>Enhanced song and artist search using Elasticsearch, with Kibana for data visualization and Logstash for event processing.</li>
                        <li>Developed Backend services for Mino Music with Python, Node.js, TypeScript, and MySQL.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Big Cabal Media</h2>
                <div>
                    <h3>Software Development Manager / May 2022 - Apr 2023</h3>
                    <ul>
                        <li>Managed a team of 6 developers, conducted code reviews, and provided mentorship to improve coding standards and productivity.</li>
                        <li>Planned project timelines, allocated resources, and oversaw the delivery of backend services for Zikoko Memes using TypeScript, Node.js, and OpenAPI.</li>
                        <li>Set up AWS EC2 servers, S3 storage, and AWS Lambda for bulk image processing.</li>
                    </ul>
                </div>
                <div>
                    <h3>Senior Software Developer / Sep 2020 - April 2022</h3>
                    <ul>
                        <li>Redeveloped the TechCabal news platform to improve scalability and user experience.</li>
                        <li>Developed custom WordPress plugins to extend functionalities and enhance content formats.</li>
                        <li>Developed a PWA offline functionality, increasing user retention in low-connectivity areas.</li>
                        <li>Implemented a CI/CD pipeline using Jenkins and Docker, reducing deployment time by 40% and improving build reliability.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Ventra Media Group</h2>
                <h3>Full-stack Developer / Sept 2016 - Jan 2018</h3>
                <ul>
                    <li>Maintained the development of the Guardian Nigeria digital news platform, a high-traffic online daily newspaper platform with over 50 million monthly users.</li>
                    <li>Developed accessible web pages for low internet (2G) areas using Facebook’s free basic to allow access to Guardian Nigeria’s daily news platform.</li>
                    <li>Worked with Google’s Accelerated Mobile Pages (AMP) to improve accessibility and leverage its parallel asset loading feature to increase web page performance.</li>
                </ul>
            </div>
            <div>
                <h2>CKDigital</h2>
                <h3>Front-end Developer / Feb 2015 - Aug 2016</h3>
                <ul>
                    <li>Worked with BEM CSS architecture to author large project design systems for enterprise clients and other SaaS web products.</li>
                    <li>Developed custom WordPress themes for banks, logistic companies, and telecommunication platforms.</li>
                </ul>
            </div>
        </>
    )
}