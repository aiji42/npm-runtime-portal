import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NPM Runtime Support - Find Which Runtimes Your NPM Libraries Support",
  description:
    "NPM Runtime Support is a portal that allows you to search for NPM libraries and see which runtimes they support. Stay informed and ensure compatibility in your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-gray-200 relative">
          <div className="fixed w-full">
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
