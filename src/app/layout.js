import Footer from "@/app/components/Footer";
import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";

import "./globals.css";

const monumentExtended = localFont({
  src: "./fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument-extended",
  weight: "400",
});

const monumentExtendedRegular = localFont({
  src: "./fonts/PPMonumentExtended-Regular.otf",
  variable: "--font-pp-monument-extended-regular",
  weight: "400",
});

const monumentExtendedLight = localFont({
  src: "./fonts/PPMonumentExtended-Light.otf",
  variable: "--font-pp-monument-extended-light",
  weight: "300",
});

const monumentExtendedBlack = localFont({
  src: "./fonts/PPMonumentExtended-Black.otf",
  variable: "--font-pp-monument-extended-black",
  weight: "900",
});

const monumentExtendedItalic = localFont({
  src: "./fonts/PPMonumentExtended-RegularItalic.otf",
  variable: "--font-pp-monument-extended-italic",
  style: "italic",
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Complex Cuts",
  description: "For that buzz you need!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monumentExtended.variable} ${monumentExtendedRegular.variable} ${monumentExtendedLight.variable} ${monumentExtendedBlack.variable} ${monumentExtendedItalic.variable} antialiased bg-[#151515] font-monumentExtendedRegular relative overflow-y-auto flex flex-col items-center`}
      >
        <Navbar />
        <main className="max-w-screen-2xl w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
