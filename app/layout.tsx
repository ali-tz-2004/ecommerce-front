import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
