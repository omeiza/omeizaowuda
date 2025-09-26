import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
	title: "Code & Purpose",
	description: "A newsletter exploring the human side of technology — from coding and AI to thoughtful design and purposeful living.",
	openGraph: {
		title: "Code & Purpose",
		url: "https://omeizaowuda.com/code-and-purpose",
		description: "A newsletter exploring the human side of technology — from coding and AI to thoughtful design and purposeful living.",
		images: [
			{
				url: "https://omeizaowuda.com/uploads/omeiza-img.jpg",
			},
		],
	},
}

export default function CodeAndPurposePage() {
	return (
		<>
			<h1>Code & Purpose</h1>
			<p><strong>Code & Purpose</strong> is my personal newsletter where I connect lessons from software engineering, AI, and everyday life. It’s a space to explore how technology can serve people - not the other way around.</p>
			<p>In each edition, I share reflections on building with care, the quiet but practical ways AI is shaping our world, and the small lessons that bridge coding and life. Think of it as a thoughtful pause in your inbox - not hype or noise, just honest insights.</p>
			<h2>You can subscribe <Link href={"https://omeiza.kit.com/534741f84d"} target="_blank">here</Link>.</h2>
			<p>If you'd like to connect, I'd love to hear from you. You can drop me an <Link href={"mailto:owudaomeiza@gmail.com"} target={"_blank"}>email</Link>, find me on <Link href={"https://www.linkedin.com/in/omeiza-owuda/"} target={"_blank"}>LinkedIn</Link>, check out my projects on <Link href={"https://github.com/omeiza"} target={"_blank"}>GitHub</Link>, or follow me on <Link href={"https://x.com/omeiza_owuda"} target={"_blank"}>X</Link>.</p>
		</>
	)
}