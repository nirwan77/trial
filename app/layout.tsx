import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrivyProviderWrapper from "@/components/PrivyProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "SoSH",
  description: "SoSh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyProviderWrapper>{children}</PrivyProviderWrapper>
      </body>
    </html>
  );
}
