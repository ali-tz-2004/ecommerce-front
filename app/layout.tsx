import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from "@/providers/app-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="fa" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
