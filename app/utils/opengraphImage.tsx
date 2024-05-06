import widont from "@/app/utils/widont"
import { ImageResponse } from "next/server"

const soehne = fetch(
  new URL("https://omeizaowuda.me/og-fonts/Soehne-Buch.otf")
).then((res) => res.arrayBuffer())

const defaultTitle = "Omeiza Owuda, Software Developer"

export default async function opengraphImage(imageText = defaultTitle) {
    const soehneFontData = await soehne

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "black",
                    backgroundSize: "150px 150px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "stretch",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(255,200,0,.15)",
                        height: "100%",
                        borderLeft: "4px solid #ffc800",
                        fontFamily: '"Soehne"',
                        fontSize: 90,
                        fontStyle: "normal",
                        color: "white",
                        padding: "80px",
                        lineHeight: 1,
                        whiteSpace: "pre-wrap",
                    }}
                >
                    { widont(imageText!) }
                </div>
            </div>
        ),
        {
          width: 1200,
          height: 630,
          fonts: [
              {
                  name: "Soehne",
                  data: soehneFontData,
                  style: "normal",
              },
          ],
        })
}
