import type { Metadata } from "next";

import "@/app/globals.scss";
import { ClientShell } from "@/components/layout/client-shell";

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
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
