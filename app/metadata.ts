import { Metadata } from "next"

const metadata: Metadata = {
  title: {
    template: `%s | Omeiza Owuda, Software Developer`,
    absolute: "Omeiza Owuda, Software Developer",
  },
  description: "Personal website, creative dump, and technical blog.",
  openGraph: {
    title: "Omeiza Owuda, Web Engineer",
    description: "Personal website, creative dump, and technical blog.",
    url: "https://omeizaowuda.me",
    siteName: "Omeiza Owuda, Software Developer",
    images: [
      {
        url: "https://omeizaowuda.me/uploads/omeiza-web-version.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@omeiza_owuda",
    creator: "@omeiza_owuda",
  },
}

export default metadata
