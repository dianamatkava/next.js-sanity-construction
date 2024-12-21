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
  title: "Create Next App",
  description: "Generated by create next app"
};


const EVENTS_QUERY = `*[_type == "site"] | order(date desc)[0]`;


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const siteData = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <html lang="en">
    <body
      className={`${playfair.variable} ${openSans.variable} antialiased h-auto`}
    >
      <AppProvider initialData={siteData}>
        <div className="w-full flex flex-col justify-between gap-6">
          <main className="w-full">
            <header className='w-full'>
              <AppHeader/>
            </header>
            <div className="w-full flex flex-col justify-between gap-12 p-[30px] sm:px-[60px]">
              {children}
            </div>

          </main>
          <footer className="w-full gap-6 flex-wrap items-center justify-center">
            <AppFooter/>
          </footer>
          <div/>
        </div>
      </AppProvider>
    </body>
    </html>
  );
}
