import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elmes = El_Messiri({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qatar Airways Museum",
  description: "Qatar Airways Museum by Ulan Seitklaiyev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={elmes.className}>{children}</body>
    </html>
  );
}
