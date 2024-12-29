import type { Metadata } from "next";
import "./globals.css";


import { Playfair_Display, Open_Sans } from 'next/font/google';
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import {sanityFetch} from "@/sanity/client";
import {AppProvider} from "@/context/AppContext";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "AMERICAN ESSENTIAL CONSTRUCTION GROUP",
  description: "Comprehensive Solution for Repair Services"
};


const siteQuery = `*[_type == "site"] | order(date desc)[0]`;
const newsQuery = `*[_type == "news"] | order(date desc)`;
const serviceQuery = `*[
_type == "service" && defined(slug.current) 
] {_id, name, slug, image, smDesc} | 
order(order desc) `;


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const siteData = await sanityFetch({ query: siteQuery });
  const serviceData: object | null = await sanityFetch({ query: serviceQuery });
  const newsData: object | null = await sanityFetch({ query: newsQuery });

  const initialData = { ...siteData, serviceData, newsData };

  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.png" sizes="any"/>
      <title>{initialData.siteName}</title>
    </head>
    <body
      className={`${playfair.variable} ${openSans.variable} antialiased h-auto`}
    >
      <AppProvider initialData={initialData}>
        <div className="w-full flex flex-col justify-between gap-6">
          <main className="w-full">
            <header className='w-full'>
              <AppHeader/>
            </header>
            <div className="w-full flex flex-col justify-between gap-12 p-[30px] sm:px-[60px]">
              {children}
            </div>

          </main>
          <footer className="w-full gap-6 flex-wrap items-center justify-center mb-[-1.5rem]">
            <AppFooter/>
          </footer>
          <div/>
        </div>
      </AppProvider>
    </body>
    </html>
  );
}
