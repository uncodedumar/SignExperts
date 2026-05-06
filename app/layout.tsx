import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingBar from "./components/Loading";
import Navigation from "./components/Navbar";
import NavigationMob from "./components/NavbarMob";

import Footer from './components/Footer';
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const siteUrl = getSiteUrl();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navbarFont = localFont({
  src: "../kenyan coffee bd it.otf",
  variable: "--font-navbar",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Custom Signs & Graphics`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/Logo.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/Logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${navbarFont.variable} h-full antialiased`}
    >
     
      <body className="min-h-full font-sans antialiased overflow-x-hidden">
        <LoadingBar>
          <>
            <Navigation />
            <NavigationMob />
            {children}
            <Footer />
          </>
        </LoadingBar>
      </body>
    </html>
  );
}
