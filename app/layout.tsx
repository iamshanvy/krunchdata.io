import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { inter } from "./ui/fonts";
import { cn } from "./lib/utils";

export const metadata: Metadata = {
  title: "Krunch",
  description: "Product Management, Growth and Engineering as a service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
