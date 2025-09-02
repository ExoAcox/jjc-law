import type { Metadata } from "next";
import { Inter, Merriweather_Sans } from "next/font/google";
import { tw } from "@functions/style";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "JJC Law Office",
  description: "JJC Law Office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={tw(process.env.NODE_ENV === "development" && "debug-screens", inter.variable, merriweather.variable)}
      >
        {children}
      </body>
    </html>
  );
}
