import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/icons.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COMPANY, SEO_KEYWORDS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
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
    { media: "(prefers-color-scheme: light)", color: "#F8F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1510" },
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#1C3A2A] focus:text-white"
          >
            Preskoči na sadržaj
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
