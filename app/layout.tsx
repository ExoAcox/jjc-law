import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { tw } from "@functions/style";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "JCC LAW",
  description: "JCC LAW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={tw(process.env.NODE_ENV === "development" && "debug-screens", "antialiased", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
