import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingBar from "./components/Loading";
import Navigation from "./components/Navbar";
import NavigationMob from "./components/NavbarMob";

import Footer from './components/Footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sign Experts IL",
  description: "Sign Experts IL is a leading sign company in IL that provides a wide range of signage solutions for businesses and organizations.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://www.signexperts.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     
      <body>

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
