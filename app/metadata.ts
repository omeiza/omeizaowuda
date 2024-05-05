import { Metadata } from "next"

const metadata: Metadata = {
  title: {
    template: `%s | Omeiza Owuda, Software Developer`,
    absolute: "Omeiza Owuda, Software Developer",
  },
  description:
    "Personal website of Omeiza Owuda, a Software Developer who is focused on user interface development.",
  openGraph: {
    title: "Omeiza Owuda, Web Engineer",
    description: "Personal website of Omeiza Owuda, a Software Developer who is focused on user interface development.",
    url: "https://omeizaowuda.me",
    siteName: "Omeiza Owuda, Software Developer",
    images: [
      {
        url: "/uploads/omeiza-web-version.jpg",
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
