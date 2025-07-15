import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pierre's Portfolio",
  description: "個人作品集網站 - 展示我所有開發過的專案",
  keywords: ["portfolio", "projects", "web development", "software engineer"],
  metadataBase: new URL('https://www.pierre-chen.com/'),
  openGraph: {
    title: "Pierre's Portfolio",
    description: "個人作品集網站 - 展示我所有開發過的專案",
    url: 'https://www.pierre-chen.com/',
    siteName: "Pierre's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
