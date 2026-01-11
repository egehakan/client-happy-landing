import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClientHappy - Client Feedback, Simplified",
  description:
    "Gather structured feedback from clients with visual voting and custom questionnaires. Share a link, get results. 100% free.",
  keywords: [
    "client feedback",
    "design feedback",
    "visual voting",
    "questionnaire",
    "project feedback",
    "agency tools",
  ],
  authors: [{ name: "ClientHappy" }],
  openGraph: {
    title: "ClientHappy - Client Feedback, Simplified",
    description:
      "Gather structured feedback from clients with visual voting and custom questionnaires.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClientHappy - Client Feedback, Simplified",
    description:
      "Gather structured feedback from clients with visual voting and custom questionnaires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://content.brandvoxai.com/general/brandvox.umd.js?v=1.0.0"
          data-id="d084bc88-a92c-4b2a-a7ed-0bcc0b1b2eec"
          data-env="PROD"
          id="brandvox-script"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
