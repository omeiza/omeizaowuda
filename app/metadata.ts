import { Metadata } from "next"

const metadata: Metadata = {
  title: {
    template: `%s | Omeiza, Software Engineer`,
    absolute: "Omeiza, Software Engineer",
  },
  description: "Software engineer who builds with care, explores AI, and shares reflections on technology and purposeful living through his work and writing.",
  openGraph: {
    title: "%s | Omeiza, Software Engineer",
    description: "Omeiza is a software engineer who builds with care, explores AI, and reflects on technology and purposeful living through his work and writing.",
    url: "https://omeizaowuda.com",
    siteName: "Omeiza, Software Engineer",
	  images: [
		  {
			  url: "https://omeizaowuda.com/uploads/omeiza-img.jpg",
			  alt: "Omeiza Owuda",
		  },
	  ],
  },
  twitter: {
    card: "summary",
    site: "@omeiza_owuda",
    creator: "@omeiza_owuda",
  },
}

export default metadata
