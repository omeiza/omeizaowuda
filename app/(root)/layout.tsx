import SkipLink from "@/app/components/SkipLink"
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import {soehne, merriweatherText} from "../fonts"
import sharedMetadata from "../metadata"
import "../styles/global.css"

export const metadata = sharedMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className={`${soehne.variable} ${merriweatherText.variable}`}>
        <body className={'fff'}>
          <SkipLink />
          {children}
          <GoogleAnalytics />
        </body>
      </html>
  )
}