import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Projects",
	description: "A curated collection of software and AI projects by Omeiza.",
	openGraph: {
		title: "Projects",
		url: "https://omeizaowuda.com/projects",
		description: "A curated collection of software and AI projects by Omeiza.",
		images: [
			{
				url: "https://omeizaowuda.com/uploads/social-og-img.jpg",
			},
		],
	},
}

export default function ProjectsPage() {
	return (
		<>
			<h1>Projects</h1>
			<p>Imagined gathering a well thought-out list of my best work would be a walk-in-the-park, but you have to wait a bit. It's coming soon.</p>
		</>
	)
}