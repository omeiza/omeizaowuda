import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
	title: "About",
	description: "Software engineer who builds with care, explores AI, and shares reflections on technology and purposeful living through his work and writing.",
	openGraph: {
		title: "About",
		type: "profile",
		url: "https://omeizaowuda.com/about",
		description: "Omeiza is a software engineer who builds with care, explores AI, and reflects on technology and purposeful living through his work and writing.",
		images: [
			{
				url: "https://omeizaowuda.com/uploads/omeiza-img.jpg",
				alt: "Omeiza Owuda",
			},
		],
	},
}

export default function AboutPage() {
	return (
		<>
			<h1>About</h1>
			<p>Hi, I'm Omeiza. I'm a software engineer who enjoys building things with care and living life with purpose. I work with the team at <Link href={"https://www.vamoos.com/"} target={"_blank"}>Vamoos</Link>, where I write code and help create tools that make travel simpler, smoother, and more enjoyable.</p>
			<p>For me, technology has never just been about writing lines of code or solving abstract problems. What excites me most is the human side of tech - the way a small feature can save someone hours of stress, or how thoughtful design can turn a complicated process into something easy. That's what keeps me curious and motivated every day.</p>
			<p>My curiosity often takes me beyond the immediate tasks at hand. I spend time exploring artificial intelligence and how it's shaping the way we live and work. There's a lot of hype out there, but I'm more interested in the quiet, practical ways AI can actually help people - whether it's making everyday tasks easier, supporting creativity, or sparking new ideas. I share my reflections and lessons through my newsletter, Code and Purpose, where I connect insights from coding, building, and everyday life.</p>
			<p>Over the years, I've learned that building well - whether it's software or habits - is really about small, thoughtful steps. My philosophy is simple: build with care, stay curious, and never forget that technology should serve people, not the other way around. I try to carry this mindset into both my professional work and my personal projects.</p>
			<p>Outside of coding, I enjoy reflecting on how the lessons from engineering apply to life. Debugging a tricky issue often feels like solving everyday problems: slow down, break things into smaller parts, and test your way forward. In the same way, life teaches me patience and perspective that I bring back into my work. It's a two-way street, and I find joy in that connection.</p>
			<p>If you'd like to connect, I'd love to hear from you. You can drop me an <Link href={"mailto:owudaomeiza@gmail.com"} target={"_blank"}>email</Link>, find me on <Link href={"https://www.linkedin.com/in/omeiza-owuda/"} target={"_blank"}>LinkedIn</Link>, check out my projects on <Link href={"https://github.com/omeiza"} target={"_blank"}>GitHub</Link>, or follow me on <Link href={"https://x.com/omeiza_owuda"} target={"_blank"}>X</Link>.</p>
		</>
	)
}