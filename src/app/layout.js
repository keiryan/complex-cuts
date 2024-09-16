import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import "./globals.css";

const monumentExtended = localFont({
  src: "./fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument-extended",
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
        className={`${geistSans.variable} ${geistMono.variable} ${monumentExtended.variable} antialiased bg-[#151515]`}
      >
        <div className="w-screen h-screen font-custom relative overflow-y-auto flex flex-col items-center">
          <Navbar />
          <main className="max-w-screen-2xl w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
