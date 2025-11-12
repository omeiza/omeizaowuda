import SkipLink from "../components/SkipLink";
import {soehne, merriweatherText} from "../fonts";
import sharedMetadata from "../metadata";
import "../styles/global.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import React from "react";

export const metadata = sharedMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className={`${soehne.variable} ${merriweatherText.variable}`} lang="en">
        <body>
          <SkipLink />
          {children}
        </body>
        <GoogleAnalytics gaId="G-CWHKXNMD9G" />
      </html>
  )
}