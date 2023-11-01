import localFont from "next/font/local"

export const soehne = localFont({
  src: [
    {
      path: "./soehne-web-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./soehne-web-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./soehne-web-dreiviertelfett-kursiv.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./soehne-web-dreiviertelfett.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "auto",
});

export const merriweatherText = localFont({
  src: [
    {
      path: "./merriweather-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./merriweather-lightitalic.woff2",
      weight: "400",
      style: "italic",
    }
  ],
  variable: "--font-serif",
  display: "auto",
});
