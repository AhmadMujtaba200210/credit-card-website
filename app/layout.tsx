import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans, Zeyada } from "next/font/google";

import "@/app/globals.scss";
import { ClientShell } from "@/components/layout/client-shell";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body-next",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const displayFont = Oswald({
  subsets: ["latin"],
  variable: "--font-display-next",
  weight: ["500", "600", "700"],
  display: "swap"
});

const scriptFont = Zeyada({
  subsets: ["latin"],
  variable: "--font-script-next",
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "PAYNEXPRO | Payment Solutions for Modern Operators",
    template: "%s | PAYNEXPRO"
  },
  description:
    "PAYNEXPRO delivers modern payment systems, partner-first growth programs, and white-glove support for ambitious businesses."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
