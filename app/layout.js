import { Mulish, Reddit_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const reddit = Reddit_Sans_Condensed({
  variable: "--font-reddit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Constructora JYGP",
  description: "Empresa de construcción con experiencia desde 2021 en obras de edificación y trabajos domiciliarios. Construcción, remodelaciones, instalaciones y estructuras metálicas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${reddit.variable}`}>

      <head>
        <link
          rel="preload"
          as="image"
          href="/images/Banner.avif"
          fetchPriority="high"
        />
      </head>

      <body>
        <Navbar />

        {children}

        <Footer />
      </body>

    </html>
  );
}
