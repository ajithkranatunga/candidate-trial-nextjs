import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./css/flickity.min.css";
import "./main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/3829d3989b.js" />
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      </head>
      
      <body className={inter.className}>
        
        {children}
        
      </body>
    </html>
  );
}
