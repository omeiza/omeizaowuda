import Link from "next/link"
import styles from "./home.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Omeiza, Software Engineer",
	description: "Software engineer who builds with care, explores AI, and shares reflections on technology and purposeful living through his work and writing.",
	openGraph: {
		title: "Omeiza, Software Engineer",
		type: "profile",
		url: "https://omeizaowuda.com",
		description: "Omeiza is a software engineer who builds with care, explores AI, and reflects on technology and purposeful living through his work and writing.",
		images: [
			{
				url: "https://omeizaowuda.com/uploads/omeiza-img.jpg",
				alt: "Omeiza Owuda",
			},
		],
	},
}

export default function HomePage() {
  return (
    <>
      <div className={`${styles.root} ${styles.home}`}>
        <div className={`${styles.intro}`}>
          <p className={styles.xxl}>Hi, my name is Omeiza (/ɔ-mei-za/). I am a Web Full-stack Engineer based in Stockholm, Sweden.</p>
          <p className={styles.xxl}>I build thoughtful products, stay curious about AI, and share lessons through my <Link href="/code-and-purpose" aria-label="Read Omeiza’s newsletter">newsletter</Link>.</p>
        </div>
        <div className={`${styles.xxl} ${styles.tile} ${styles.extras}`}>
          <Link href="/about" aria-label="Learn more about Omeiza">About Me &rarr;</Link>
          <Link href="/projects" aria-label="See Omeiza’s projects">Projects &rarr;</Link>
          <Link href="/code-and-purpose" aria-label="Read Omeiza’s newsletter">Newsletter &rarr;</Link>
        </div>
      </div>
    </>
  )
}
