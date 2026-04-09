import { FlareCursor, Footer, Header, Providers, TopButton } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript } from '@mantine/core';
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Head from "./head";

const font = Inter({ subsets: ["latin"] });

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://arham-aqeel.vercel.app"),

  title: {
    default: "Arham Aqeel — Product Engineer",
    template: "%s | Arham Aqeel",
  },

  description:
    "Product Engineer & Mechanical Engineering student at NIT Tiruchirappalli. I build full-stack products, train ML models, and design engineering systems — from a P2P thrift marketplace to a self-hosted AI workstation.",

  keywords: [
    "Arham Aqeel",
    "Product Designer",
    "Product Engineer",
    "Mechanical Engineer",
    "product design",
    "full stack development",
    "machine learning",
    "NIT Trichy",
    "NIT Tiruchirappalli",
    "Full Stack Developer",
    "Next.js Developer",
    "Firebase",
    "Machine Learning",
    "ThriftX",
    "BAJA SAE India",
    "BAJA SAEINDIA",
    "Portfolio",
    "Mechanical Engineering",
    "Ollama",
    "Self Hosted AI",
  ],

  authors: [{ name: "Arham Aqeel", url: "https://arham-aqeel.vercel.app" }],
  creator: "Arham Aqeel",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arham-aqeel.vercel.app",
    title: "Arham Aqeel — Product Engineer",
    description:
      "Product Engineer & Mechanical Engineering student at NIT Trichy. Building full-stack products, ML systems, and engineering solutions.",
    siteName: "Arham Aqeel",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Arham Aqeel — Product Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arham Aqeel — Product Engineer",
    description:
      "Product Engineer & Mechanical Engineering student at NIT Trichy. Building full-stack products, ML systems, and engineering solutions.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  alternates: {
    canonical: "https://arham-aqeel.vercel.app",
  },

  // ─── Add your verification codes here after signing up ───
  // verification: {
  //   google: "paste-google-search-console-code-here",
  //   other: {
  //     "msvalidate.01": "paste-bing-webmaster-code-here",
  //   },
  // },
};

// ─────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased min-h-screen aeonikFont",
                font.className,
            )}
        >
            <head>
                <ColorSchemeScript />
                <Head />
            </head>
            <body className="min-h-screen bg-background text-foreground">
                <Providers>
                    <Header />
                    <FlareCursor />
                    {children}
                    <TopButton />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
};