import SkipLink from "@/app/components/SkipLink";
import {soehne, merriweatherText} from "../fonts";
import sharedMetadata from "../metadata";
import "../styles/global.css";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = sharedMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className={`${soehne.variable} ${merriweatherText.variable}`}>
        <body>
          <SkipLink />
          {children}
        </body>
        <GoogleAnalytics gaId="G-CWHKXNMD9G" />
      </html>
  )
}