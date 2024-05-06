import { Metadata } from "next"

const metadata: Metadata = {
  title: {
    template: `%s | Omeiza Owuda, Software Developer`,
    absolute: "Omeiza Owuda, Software Developer",
  },
  description: "Personal website, creative dump, and technical blog.",
  openGraph: {
    title: "Omeiza Owuda, Software Developer",
    description: "Personal website, creative dump, and technical blog.",
    url: "https://omeizaowuda.me",
    siteName: "Omeiza Owuda, Software Developer",
    images: [
      {
        url: "https://omeizaowuda.me/uploads/omeiza-web-version-cropped.jpg",
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
