import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/app/components/ClientWrapper";
import { ThemeProvider } from "../app/components/ThemeContext";

export const metadata: Metadata = {
  title: "Meu Site",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <ClientWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
