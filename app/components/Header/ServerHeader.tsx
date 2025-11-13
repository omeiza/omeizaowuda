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
    label: "Code & Purpose",
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
        <div>
          <Link className={`plainlink logo`} href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 15" fill="none" className="svg-spinn"><path d="M19.301 2.18055C17.2599 -0.122267 11.5078 0.444321 6.45575 3.44555C1.40369 6.44679 -1.0366 10.7439 1.00728 13.0467C3.04835 15.3495 8.80045 14.7829 13.8525 11.7817C18.9046 8.78046 21.342 4.48337 19.301 2.18055ZM14.1983 10.1156C11.2211 13.3917 6.99554 14.9288 4.76329 13.546C2.53105 12.1632 3.1355 8.38777 6.11276 5.11166C9.09002 1.83555 13.3155 0.298467 15.5478 1.68128C17.78 3.06409 17.1756 6.83947 14.1983 10.1156Z" fill="currentColor"></path></svg>
          </Link>
        </div>
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
