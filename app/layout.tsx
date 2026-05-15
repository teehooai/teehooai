import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const SITE_URL = "https://www.teehooai.com";

export const metadata: Metadata = {
  title: {
    default: "Teehoo AI — An AI Lab for the agent era",
    template: "%s | Teehoo AI",
  },
  description:
    "Teehoo AI is building the infrastructure layer for the AI-native economy — AI security, AI-native martech, AI financial systems, and local services infrastructure. Los Angeles.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Teehoo AI",
    title: "Teehoo AI — An AI Lab for the agent era",
    description:
      "Decision as a service. Every product designed for two readers: a human, and an agent. Los Angeles.",
  },
  twitter: {
    card: "summary",
    title: "Teehoo AI — An AI Lab for the agent era",
    description: "Decision as a service. Built for humans and agents. Los Angeles.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-th-paper text-th-ink antialiased">
        {children}
      </body>
    </html>
  );
}
