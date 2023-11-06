import Link from "next/link"
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.root}>
        <div className={`${styles.wrapper} small`}>
          You can find me on{" "}
          <Link rel="me" href="https://twitter.com/_omzui">Twitter</Link> and {" "}
          <Link rel="me" href="https://github.com/omeiza">
            GitHub
          </Link>.
        </div>
      </footer>
    </>
  )
}
