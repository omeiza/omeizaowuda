import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image";

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/portfolio",
    label: "Portfolio",
  },
  {
    to: "/resume",
    label: "Resume",
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
          <Image src={"/uploads/omeiza-sketch-back.png"} alt={"Omeiza Owuda"} width={40} height={40} />
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
