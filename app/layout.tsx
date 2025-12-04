import type { Metadata } from "next";
import { Geist_Mono, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./src/Common/Navbar";
import Footer from "./src/Common/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-karla"
});

export const metadata: Metadata = {
  title: "Aadhavan",
  description: "Frontend engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${geistMono.variable} antialiased flex justify-center px-6 sm:px-10 md:px-32 lg:px-44 xl:px-80 2xl:px-[500px] pb-9`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
