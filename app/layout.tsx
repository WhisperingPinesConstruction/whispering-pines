import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whisperingpines.example"),
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mx-auto min-h-[calc(100vh-3.25rem)] max-w-10xl px-4 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
