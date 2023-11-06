import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Omeiza Owuda’s portfolio of Web Frontend Engineering projects",
}

export default function PortfolioPage() {
	return (
		<>
			<h1>Portfolio</h1>
			<p>
				Imagined gathering a well thought-out list of my best work would be a walk-in-the-park, but you have to wait a bit. It's coming soon.
			</p>
		</>
	)
}