import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UofT Purity Test",
  description: "Confirm your purity as a Uoft Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
