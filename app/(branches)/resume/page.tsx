import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resume",
    description: "Resume of Omeiza Owuda",
}

export default function ResumePage() {
    return (
        <>
            <h1>Resume</h1>
            <p>
                I intend to build a community of like and unlike minds, to allow a flow of ideas via my newsletter. This is underway, stay tuned.
            </p>
        </>
    )
}