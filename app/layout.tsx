import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s / The Journal app.",
    default: "The best Journal app, period.",
  },
  description: "A simple journaling app to keep your thoughts organized.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullstack-next-js-v14.vercel.app",
    siteName: "The Journal app",
    description: "A simple journaling app to keep your thoughts organized.",
    images: [
      {
        url: "https://fullstack-next-js-v14.vercel.app/home.png",
        width: 1200,
        height: 630,
        alt: "The Journal app",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
