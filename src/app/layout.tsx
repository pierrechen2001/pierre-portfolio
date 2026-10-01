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
  title: {
    default: "Pierre Chen - 全端開發者 | 行動應用、Web 與 AI 作品集",
    template: "%s | Pierre Chen"
  },
  description: "Pierre Chen 的作品集：Aiii.AI 實習、DOGTOR AI 學習應用、MapIt 社交地圖與全端開發專案。",
  keywords: [
    "Pierre Chen", "全端開發者", "AI開發", "App開發", "Flutter", "React", "Next.js", 
    "軟體工程師", "作品集", "portfolio", "full-stack developer", "software engineer",
    "mobile app", "web development", "artificial intelligence"
  ],
  authors: [{ name: "Pierre Chen" }],
  creator: "Pierre Chen",
  publisher: "Pierre Chen",
  metadataBase: new URL('https://www.pierre-chen.com/'),
  alternates: {
    canonical: 'https://www.pierre-chen.com/',
  },
  openGraph: {
    title: "Pierre Chen - 全端開發者 | 行動應用、Web 與 AI 作品集",
    description: "Pierre Chen 的開發作品集：DOGTOR AI 學習應用、MapIt 社交地圖與全端開發專案。",
    url: 'https://www.pierre-chen.com/',
    siteName: "Pierre Chen Portfolio",
    locale: 'zh_TW',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pierre Chen - 全端開發者作品集',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pierre Chen - 全端開發者 | 行動應用、Web 與 AI 作品集",
    description: "Pierre Chen 的開發作品集：DOGTOR AI 學習應用、MapIt 社交地圖與全端開發專案。",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pierre Chen",
    "url": "https://www.pierre-chen.com",
    "sameAs": [
      "https://github.com/pierrechen2001",
      "https://www.linkedin.com/in/guanyu-chen-989117303/"
    ],
    "jobTitle": "Full-Stack Developer / AI Developer",
    "description": "Pierre Chen 在 Aiii.AI 擔任 AI 應用開發實習生，並參與 DOGTOR 與 MapIt 的產品開發。",
    "worksFor": {
      "@type": "Organization",
      "name": "Superb Education"
    },
    "knowsAbout": [
      "Flutter Development",
      "React Development", 
      "Next.js",
      "Artificial Intelligence",
      "Mobile App Development",
      "Web Development",
      "Full-Stack Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "National Taiwan University"
    }
  };

  return (
    <html lang="zh-TW" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
