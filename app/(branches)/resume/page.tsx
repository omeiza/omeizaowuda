import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resume",
    description: "Work background, skills, and accomplishments",
    openGraph: {
        title: "Resume",
        description: "Work background, skills, and accomplishments",
        url: "https://omeizaowuda.me/resume",
        images: [
            {
                url: "https://omeizaowuda.me/uploads/social-og-img.jpg",
            },
        ],
    },
}

export default function ResumePage() {
    return (
        <>
            <h1>Resume</h1>
            <p>I have gathered 9 years of experience in tech and it has been an exciting career thus far. Here is a breakdown of how I spent my 9 years in tech.</p>
            <div>
                <h2>Notjustok LLC</h2>
                <div>
                    <h3>Principal Software Developer / May 2023 - Present</h3>
                    <ul>
                        <li>Built Notjustok Distribution’s music artist report platform that analyzes music data and processes individual artist royalties from Spotify and Apple Music.</li>
                        <li>Developed African Cup of Nations 2023 Predict N’ Win application to allow football enthusiasts across Africa to make predictions about the competition.</li>
                        <li>Managed and implemented server migrations, maintenance, deployments, and artist data protection.</li>
                        <li>Carried out project planning, resource planning, code-review, and developed high-level technical direction planning.</li>
                    </ul>
                </div>
                <div>
                    <h3>Senior Software Developer / Sept 2020 - April 2023</h3>
                    <ul>
                        <li>Led and managed a team of 6 Software Developers to build and maintain all of Notjustok’s web and mobile platforms.</li>
                        <li>Created API integration for the Mino Music web app with Audible Magic to allow automatic content recognition (ACR) for songs and reduce copyright issues.</li>
                        <li>Improved songs, albums, artists, and lyrics search with Elasticsearch, Kibana, and Logstash.</li>
                    </ul>
                </div>
                <div>
                    <h3>Software Developer / Feb 2018 - Aug 2020</h3>
                    <ul>
                        <li>Developed WordPress plugins for on-the-fly image optimization and conversion from other image formats to WebP.</li>
                        <li>Developed Backend services for Mino Music with Node.js, Express.js, and SQL.</li>
                        <li>Developed new features to improve the editorial capability and search engine visibility of the Notjustok platform.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Big Cabal Media</h2>
                <div>
                    <h3>Software Development Manager / May 2022 - April 2023</h3>
                    <ul>
                        <li>Developed backend services for Zikoko Memes using Node.js, OpenAPI, TypeScript, Express.js, SQL, and Sequelize as ORM.</li>
                        <li>Carried out project planning, resource planning, code review, and mentorship of 3 Software Developers.</li>
                        <li>Managed AWS EC2 server setup with S3 storage, as well as AWS Lambda for bulk image processing.</li>
                        <li>Built a web scrapper using Node.js and Puppeteer to get memes from search engines and social media sites.</li>
                    </ul>
                </div>
                <div>
                    <h3>Software Developer / Sept 2020 - April 2022</h3>
                    <ul>
                        <li>Redeveloped the new TechCabal platform to improve user experience and optimize for scalability.</li>
                        <li>Developed WordPress plugins for TechCabal and Zikoko, to extend their functionalities and improve content formats.</li>
                        <li>Developed a Progressive Web App for offline web experience using JavaScript and Service Worker API.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Ventra Media Group</h2>
                <h3>Software Developer / Sept 2016 - Jan 2018</h3>
                <ul>
                    <li>Maintained the development of the Guardian Nigeria digital platform, a high-traffic online daily newspaper platform with over 50 million monthly users.</li>
                    <li>Developed accessible web pages for low internet (2G) areas using Facebook’s free basic to allow access to Guardian Nigeria’s daily news platform.</li>
                    <li>Worked with Google’s Accelerated Mobile Pages (AMP) to improve accessibility and leverage its parallel asset loading feature to increase web page performance on Guardian.</li>
                </ul>
            </div>
            <div>
                <h2>CKDigital</h2>
                <h3>Software Developer (User Interface Design) / Feb 2015 - Aug 2016</h3>
                <ul>
                    <li>Wrote production-grade SCSS code, specifically using mixins and CSS animations.</li>
                    <li>Worked with BEM CSS architecture to author large project design systems for enterprise clients and other SAAS web products.</li>
                    <li>Developed custom WordPress themes for banks, logistic companies, and telecommunication platforms.</li>
                </ul>
            </div>
        </>
    )
}