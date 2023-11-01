/* eslint-disable prefer-const */
import Link from "next/link"
import styles from "./home.module.css"

export default function HomePage() {
  return (
    <>
      <div className={`${styles.root} ${styles.home}`}>
        <div className={`${styles.intro}`}>
          <p className={styles.xxl}>
            Hi, my name is Omeiza Owuda, I am software developer focused on user interface development and design systems. I currently work as a principal software developer at Notjustok LLC, where I build African music distribution and marketing platforms.
          </p>
        </div>
        <div className={`${styles.xxl} ${styles.tile} ${styles.extras}`}>
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/newsletter">Newsletter &rarr;</Link>
        </div>
      </div>
    </>
  )
}
