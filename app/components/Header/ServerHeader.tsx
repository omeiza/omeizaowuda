import Link from "next/link"
import styles from "./styles.module.css"

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  // {
  //   to: "/portfolio",
  //   label: "Portfolio",
  // },
  {
    to: "/code-and-purpose",
    label: "Newsletter",
  },
]

export default function Header({
  activeSegments = [],
}: {
  activeSegments: string[]
}) {
  return (
    <>
      <header className={styles.root}>
        <Link className={`plainlink logo`} href="/">
          Omeiza S. Owuda
        </Link>
        <nav className={styles.navigation}>
          <ul className="plainlist">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  className={`plainlink ${
                    activeSegments.includes(to.split("/")[1])
                      ? styles.activeSegment
                      : ""
                  }`}
                  href={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
