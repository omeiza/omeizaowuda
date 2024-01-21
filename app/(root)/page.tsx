import Link from "next/link"
import styles from "./home.module.css"

export default function HomePage() {
  return (
    <>
      <div className={`${styles.root} ${styles.home}`}>
        <div className={`${styles.intro}`}>
          <p className={styles.xxl}>
            Hi, my name is Omeiza (/ɔ-mei-za/), I am a Full-stack Engineer focused on user experience. I spend most of my time conceptualizing project ideas and building them into useful web products.
          </p>
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
