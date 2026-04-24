import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/icons.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COMPANY, SEO_KEYWORDS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const artifex = localFont({
  variable: "--font-artifex",
  display: "swap",
  src: [
    { path: "../../public/fonts/ArtifexCFExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/ArtifexCFExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "../../public/fonts/ArtifexCFLight.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/ArtifexCFLightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/ArtifexCFBook.woff2", weight: "350", style: "normal" },
    { path: "../../public/fonts/ArtifexCFBookItalic.woff2", weight: "350", style: "italic" },
    { path: "../../public/fonts/ArtifexCFRegular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/ArtifexCFRegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/ArtifexCFDemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/ArtifexCFDemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../../public/fonts/ArtifexCFBold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/ArtifexCFBoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/ArtifexCFExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/ArtifexCFExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "../../public/fonts/ArtifexCFHeavy.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/ArtifexCFHeavyItalic.woff2", weight: "900", style: "italic" },
  ],
});

const siteUrl = COMPANY.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Šlišurić d.o.o. — Drvene palete, EPAL palete i ISPM-15 za proizvođače",
    template: "%s | Šlišurić d.o.o.",
  },
  description:
    "Licencirani proizvođač drvenih paleta. EPAL, industrijske i polovne palete, ISPM-15 termičko tretiranje za izvoz, biomasa i građevinska građa. Isporuka proizvođačima i distributerima u cijeloj Europskoj uniji i regiji (HR, SI, AT, DE, IT, BA, RS). Tradicija od 1970-ih.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  applicationName: COMPANY.name,
  category: "Manufacturing",
  alternates: {
    canonical: "/",
    languages: { "hr-HR": "/", "bs-BA": "/", "sr-RS": "/" },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    alternateLocale: ["bs_BA", "sr_RS"],
    url: siteUrl,
    siteName: COMPANY.name,
    title: "Šlišurić d.o.o. — Drvene palete za proizvođače i distributere",
    description:
      "EPAL palete, industrijske palete po mjeri, ISPM-15 tretirane izvozne palete. Vlastita pilana, isporuka u cijelu EU i regiju. Odgovor na upit u 24h.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Šlišurić d.o.o. — drvene palete za proizvođače",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Šlišurić d.o.o. — Drvene palete",
    description:
      "Licencirani proizvođač EPAL i industrijskih paleta. Isporuka u cijelu EU. ISPM-15 za izvoz. Odgovor u 24h.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Placeholder — replace with real property once Search Console ownership is confirmed.
    google: undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDE3CC" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1A12" },
  ],
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: siteUrl,
  logo: `${siteUrl}/logo-slisuric.svg`,
  image: `${siteUrl}/og-cover.jpg`,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: String(COMPANY.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ulica Vladimira Nazora 12",
    addressLocality: COMPANY.addressLocality,
    addressRegion: COMPANY.addressRegion,
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  areaServed: COMPANY.markets.map((m) => ({ "@type": "Country", name: m })),
  vatID: `HR${COMPANY.oib}`,
  taxID: COMPANY.oib,
  knowsAbout: [
    "EPAL palete",
    "Industrijske palete",
    "ISPM-15 termičko tretiranje",
    "Drvena ambalaža",
    "Biomasa",
    "Građevinska drvena građa",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "EPAL euro palete 1200×800" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Industrijske palete po mjeri" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Polovne EUR palete" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "ISPM-15 termičko tretiranje" } },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${artifex.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ink focus:text-paper"
            >
              Preskoči na sadržaj
            </a>
            <Nav />
            <main id="main">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
