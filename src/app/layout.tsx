import type { Metadata, Viewport } from "next";
import { Karla, Pacifico, Source_Sans_3, Ubuntu_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import { siteTitle, siteUrl } from "@/lib/site";
import { Toaster } from "sonner";
import { ParticleField } from "@/components/particle-field";
import { SiteRail } from "@/components/site-rail";
import "./globals.css";

const karla = Karla({ variable: "--font-karla", subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ variable: "--font-pacifico", subsets: ["latin"], display: "swap", weight: "400" });
const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"], display: "swap" });
const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const { person } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${person.name}` },
  description: person.seoDescription,
  applicationName: siteTitle,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  keywords: [person.name, "Portfolio", "ECE student", "Developer", "Python", "AI", "Web developer", "Hosur"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteTitle,
    title: siteTitle,
    description: person.seoDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: person.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${pacifico.variable} ${sourceSans.variable} ${ubuntuMono.variable} min-h-dvh font-ui`}
      >
        <a
          href="#main"
          className="sr-only fixed top-3 left-3 z-50 rounded-full bg-paper px-4 py-2 text-sm text-ink focus:not-sr-only"
        >
          Skip to content
        </a>
        <ParticleField />
        <SiteRail />
        <main id="main" className="relative z-10 min-h-dvh">
          {children}
        </main>
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#0b0b0b",
              color: "#fcf6f4",
              border: "1px solid rgba(252,246,244,0.2)",
            },
          }}
        />
      </body>
    </html>
  );
}
