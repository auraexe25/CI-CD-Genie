import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/providers/theme-providers";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <ThemeProvider >
            {children}
        </ThemeProvider>
          </Providers>
      </body>
    </html>
  );
}
