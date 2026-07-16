import type { Metadata } from "next";
import { Marcellus, Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whisperingpinesconstruction.ca"),
  title: {
    default: "Whispering Pines | Construction in Ottawa",
    template: "%s | Whispering Pines",
  },
  description:
    "Family-run construction in Ottawa. Custom homes, renovations, decks & fences. Free quotes.",
  openGraph: {
    title: "Whispering Pines | Construction in Ottawa",
    description:
      "Family-run construction in Ottawa. Custom homes, renovations, decks & fences.",
    url: "/",
    siteName: "Whispering Pines",
    images: [
      {
        url: "/whisperingpineslogo.png",
        width: 800,
        height: 800,
        alt: "Whispering Pines",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whispering Pines | Construction in Ottawa",
    description:
      "Family-run construction in Ottawa. Custom homes, renovations, decks & fences.",
    images: ["/whisperingpineslogo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${hankenGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
