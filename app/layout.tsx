import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monatSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI powered platform for  mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monatSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
