import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesbahhasib.com"),
  title: "Mohammad Mesbah Uddin Hasib — Project Coordinator & Digital Product Delivery",
  description:
    "Project coordination and digital product delivery professional with 7+ years bridging business, technology, operations and users across IT, EdTech and social impact initiatives.",
  keywords: [
    "Mesbah Hasib",
    "Project Coordinator",
    "Product Operations",
    "Digital Transformation",
    "BRAC IT",
    "Project Management Bangladesh",
  ],
  authors: [{ name: "Mohammad Mesbah Uddin Hasib" }],
  openGraph: {
    title: "Mohammad Mesbah Uddin Hasib — Project Coordinator & Digital Product Delivery",
    description:
      "I connect people, technology, and ideas to turn complex initiatives into meaningful outcomes.",
    url: "https://mesbahhasib.com",
    siteName: "Mesbah Hasib",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mesbah Uddin Hasib",
    description:
      "Project coordination and digital product delivery professional with 7+ years of experience.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased selection:bg-coral selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
