import Link from "next/link"
import styles from "./home.module.css"
import {Metadata} from "next";


const metadata: Metadata = {
  title: "Omeiza Owuda, Software Developer",
  description: "Personal website, creative dump, and technical blog",
  openGraph: {
    title: "Omeiza Owuda, Software Developer",
    description: "Personal website, creative dump, and technical blog",
    url: "https://omeizaowuda.me",
    siteName: "Omeiza Owuda, Software Developer",
    images: [
      {
        url: "https://omeizaowuda.me/uploads/social-og-img.jpg",
      },
    ],
  }
}

export default function HomePage() {
  return (
    <>
      <div className={`${styles.root} ${styles.home}`}>
        <div className={`${styles.intro}`}>
          <p className={styles.xxl}>Hi, my name is Omeiza (/ɔ-mei-za/). I am a Web Full-stack Engineer focused on user experience.</p>
          <p className={styles.xxl}>My core competencies are my ability to build useful, yet scalable web products, a high standard of excellence, and a drive to constantly improve architectures and standards across an organization.</p>
        </div>
        <div className={`${styles.xxl} ${styles.tile} ${styles.extras}`}>
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/resume">Resume &rarr;</Link>
        </div>
      </div>
    </>
  )
}
