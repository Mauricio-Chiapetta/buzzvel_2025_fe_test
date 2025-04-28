import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buzzvel | Frontend test",
  description: "Buzzvel frontEnd test 2025",
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight:["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
