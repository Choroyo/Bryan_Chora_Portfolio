import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bryan Chora | Software Engineer & Data Scientist",
  description:
    "Modern portfolio for Bryan Chora built with Next.js, Tailwind CSS, Framer Motion, and a secure contact API.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bryan Chora | Software Engineer & Data Scientist",
    description:
      "Explore Bryan's latest projects, background, and contact options.",
    url: "https://example.com",
    siteName: "Bryan Chora Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
          <div className="pointer-events-none absolute inset-0" />
          <Navbar />
          <main className="relative z-10 px-6 pb-24 pt-10 md:px-12 lg:px-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
