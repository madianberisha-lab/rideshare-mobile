import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Pwa from "@/components/Pwa";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RideShare AAB",
  description: "Gjej udhetime drejt AAB.",
  applicationName: "RideShare AAB",
  appleWebApp: {
    capable: true,
    title: "RideShare",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Pwa />
        {children}
      </body>
          </html>

  );
}
