import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { APP } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: APP.name,
    template: `%s • ${APP.name}`,
  },

  description: APP.description,

  metadataBase: new URL(APP.url),

  keywords: [
    "Resume Builder",
    "ATS Resume",
    "Professional Resume",
    "Resume PDF",
    "Resume Maker",
    "India Resume Builder",
    "Privacy First Resume Builder",
  ],

  authors: [
    {
      name: "Suraj",
    },
  ],

  creator: "Suraj",

  applicationName: APP.name,

  openGraph: {
    title: APP.name,
    description: APP.description,
    url: APP.url,
    siteName: APP.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: APP.name,
    description: APP.description,
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="desktop-only-content">
          {children}
        </div>

        <div className="mobile-block-screen">
          <div className="mobile-block-screen__inner">
            <h1 className="mobile-block-screen__title">
              {APP.name}
            </h1>

            <p className="mobile-block-screen__message">
              VitaeOne is crafted for the precision of a desktop screen.
              Please switch to a desktop or laptop to continue building
              your resume.
            </p>
          </div>
        </div>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}