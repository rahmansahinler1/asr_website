import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";
import type { Metadata, Viewport } from "next";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aisearchrefs - Track Your Brand Mentions in AI Search Results",
  description: "Monitor and track your brand mentions across AI search engines and chatbots. Get insights into how AI mentions your brand in search results.",
  keywords: "AI search tracking, brand mentions, AI monitoring, search visibility, brand tracking, AI SEO",
  icons: {
    icon: [
      { url: "/asr-favicon/favicon.ico", sizes: "any" },
      { url: "/asr-favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/asr-favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/asr-favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/asr-favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/asr-favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/asr-favicon/site.webmanifest",
  other: {
    "msapplication-TileColor": "#FFD66B",
    "msapplication-config": "/asr-favicon/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFD66B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-primary dark:bg-black ${inter.className}`}>
        <Providers>
          {/* Main content */}
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
