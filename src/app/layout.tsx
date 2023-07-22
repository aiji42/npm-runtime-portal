import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NPM Runtimes - Find Which Runtimes Your NPM Libraries Support",
  description:
    "NPM Runtimes is a portal that allows you to search for NPM libraries and see which runtimes they support. Stay informed and ensure compatibility in your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>{children}</body>
    </html>
  );
}
