import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tolga Can Dölek",
  description: "Tolga Can Dölek'in kişisel web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`antialiased ${inter.className}`}>
        <div className="relative min-h-screen">
          <Background />
          {children}
        </div>
      </body>
    </html>
  );
}
