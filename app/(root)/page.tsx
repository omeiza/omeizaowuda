import Link from "next/link"
import styles from "./home.module.css"

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
