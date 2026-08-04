import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "God's City International Church | Deliverance, Rescue, Restoration",
    template: "%s | God's City International Church",
  },
  description:
    "God's City International Church (GCIC) is a multicultural church in Abuja, Nigeria, on a mandate of Deliverance, Rescue, Restoration and Mobile Fire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
