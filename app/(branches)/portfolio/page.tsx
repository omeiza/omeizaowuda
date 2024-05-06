import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Collection of wide range of technical projects",
	openGraph: {
		title: "Portfolio",
		description: "Collection of wide range of technical projects",
		images: [
			{
				url: "https://omeizaowuda.me/uploads/omeiza-web-version.jpg",
			},
		],
	},
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