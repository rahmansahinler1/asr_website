import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Search Refs - Track Your Brand Mentions in AI Search Results",
  description: "Monitor and track your brand mentions across AI search engines and chatbots. Get insights into how AI mentions your brand in search results.",
  keywords: "AI search tracking, brand mentions, AI monitoring, search visibility, brand tracking, AI SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

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
