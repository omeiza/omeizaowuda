import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Newsletter",
    description: "Newsletter page of Omeiza Owuda, to allow sharing of ideas about Web Frontend Engineering.",
}

export default function PortfolioPage() {
    return (
        <>
            <h1>Newsletter</h1>
            <p>
                I intend to build a community of like and unlike minds, to allow a flow of ideas via my newsletter. This is underway, stay tuned.
            </p>
        </>
    )
}