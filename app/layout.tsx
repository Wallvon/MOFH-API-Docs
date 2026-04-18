import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://api.myownfreehost.net"),
  authors: [
    {
      name: "Robert Stokreef",
      url: "https://robert-s.dev",
    },
    {
      name: "MOFH API Documentation Contributors",
      url: "https://github.com/Wallvon/MOFH-API-Docs/graphs/contributors",
    },
  ],
  keywords: [
    "MyOwnFreeHost",
    "MOFH",
    "iFastNet",
    "VistaPanel",
    "vPanel",
    "FreeHosting",
    "Documentation",
    "API",
  ],
  generator: "Next.js",
  applicationName: "MOFH-API-Docs",
  appleWebApp: {
    title: "MOFH API Docs",
  },
  title: {
    default: "MyOwnFreeHost API Documentation",
    template: "%s - MOFH API Docs",
  },
  openGraph: {
    url: "./",
    siteName: "MyOwnFreeHost API Documentation",
    locale: "en_US",
    type: "website",
    // TODO: Generate dynamic Open Graph images per path on build.
    images: [{ url: "https://api.myownfreehost.net/images/og.png" }],
  },
  other: {
    "msapplication-TileColor": "#FF5274",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://api.myownfreehost.net",
  },
  alternates: {
    canonical: "./",
  },
};

const banner = (
  <Banner storageKey="maintenance">
    ⚠️ This documentation is currently under maintenance. Page content may
    change.
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 0 250 76"
          fill="currentColor"
        >
          <g
            transform="translate(0.000000,76.000000) scale(0.050000,-0.050000)"
            stroke="none"
            fill="currentColor"
          >
            <path
              d="M3574 1491 c-110 -39 -207 -111 -266 -195 -100 -142 -106 -188 -107
                             -761 l-1 -535 110 0 110 0 0 320 0 320 210 0 210 0 0 110 0 110 -210 0 -210 0
                             0 91 c0 197 119 329 311 345 l109 9 0 107 0 108 -95 -1 c-52 0 -129 -13 -171
                             -28z"
            />
            <path
              d="M3920 760 l0 -760 109 0 108 0 7 329 c8 425 66 521 316 521 253 0
                             320 -111 320 -533 l0 -317 110 0 110 0 -2 325 c-1 350 -11 401 -109 539 -138
                             194 -455 271 -664 160 l-85 -45 0 271 0 270 -110 0 -110 0 0 -760z"
            />
            <path
              d="M361 1047 c-255 -94 -341 -279 -341 -731 l0 -316 110 0 110 0 0 317
                             c0 421 67 533 318 533 251 0 322 -121 322 -548 l0 -302 110 0 110 0 0 317 c0
                             422 67 533 320 533 253 0 320 -111 320 -533 l0 -317 110 0 110 0 0 305 c0 343
                             -14 412 -106 547 -178 263 -549 298 -813 76 l-63 -54 -64 61 c-140 132 -370
                             179 -553 112z"
            />
            <path
              d="M2409 1053 c-328 -126 -460 -473 -296 -775 263 -484 995 -292 997
                             262 1 366 -373 640 -701 513z m347 -247 c262 -194 145 -576 -176 -576 -348 0
                             -447 456 -130 603 80 37 239 23 306 -27z"
            />
          </g>
        </svg>
      </>
    }
    projectLink="https://github.com/Wallvon/MOFH-API-Docs"
    chatLink="https://dsc.gg/ifastnet"
  />
);
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} ©&nbsp;
    <a href="https://robert-s.dev" target="_blank">
      Robert S.
    </a>
    &nbsp;&amp;&nbsp;
    <a
      href="https://github.com/Wallvon/MOFH-API-Docs/graphs/contributors"
      target="_blank"
    >
      Contributors
    </a>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 348,
          saturation: {
            light: 95,
            dark: 100,
          },
          lightness: {
            light: 30,
            dark: 70,
          },
        }}
      ></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Wallvon/MOFH-API-Docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
