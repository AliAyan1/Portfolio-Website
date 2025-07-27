import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ali Ayan - Full Stack AI Developer",
  description:
    "Full Stack AI Developer specializing in modern web technologies. Creating responsive, user-friendly web applications and AI-driven solutions.",
  openGraph: {
    title: "Ali Ayan - Full Stack AI Developer",
    description:
      "Full Stack AI Developer specializing in modern web technologies. Building intelligent, functional, and responsive web applications.",
    url: "https://aliayan.vercel.app", // Replace with your actual portfolio URL
    images: [
      {
        url: "/assets/ali-ayan.jpg", // Replace with your actual image path
        width: 800,
        height: 600,
        alt: "Ali Ayan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AliAyanDev", // Replace with your Twitter handle
    creator: "@AliAyanDev", // Replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
