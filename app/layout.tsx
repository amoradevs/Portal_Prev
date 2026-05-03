import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Prev — Direito Previdenciário",
  description: "Portal de aprendizado de Direito Previdenciário para advogados",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Sidebar />
        <div className="flex-1 flex flex-col" style={{ marginLeft: "260px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
