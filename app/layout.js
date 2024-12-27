import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter= Inter({subsets: ["latin"]});

export const metadata = {
  title: "Wealth Management app",
  description: "One Stop Finance Plateform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
    <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
      <body
        className={`${inter.className}`}
      >
        <Header></Header>
       <main className="min-h-screen">{children}</main> 
       <Toaster richColors />
        <footer className="bg-blue-50 py-12">
          <div className="container max-auto px-4 text-center text-gray-600">
            <p> Made by vijay kumar</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
